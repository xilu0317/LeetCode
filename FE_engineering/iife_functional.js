(function (exports) {
    'use strict'

    // private helper
    var store = function (json, callback) {
        chrome.storage.local.set(json, function () {
            if (callback)
                callback()
        })
    }

    var fetch = function (keys, callback) {
        chrome.storage.local.get(keys, function (items) {
            if (callback)
                callback(items)
        })
    }

    var remove = function (keys) {
        chrome.storage.local.remove(keys, function () {
            xlog('Removed keys from local storage:', keys)
        })
    }

    // Internal object
    function StorageManager() { }

    StorageManager.prototype.clearAll = function (callback) {
        chrome.storage.local.clear(function () {
            var success = !chrome.runtime.lastError
            if (success)
                xlog('Cleared all local storage records.')
            else
                xwarn('Failed to clear all records message=', lastError.message)

            if (callback)
                callback(success)
        })
    }

    StorageManager.prototype.putDeviceId = function (deviceId) {
        store({ deviceId: deviceId })
    }

    StorageManager.prototype.getDeviceId = function (callback) {
        fetch(['deviceId'], function (items) {
            if (items.deviceId)
                callback(items.deviceId)
            else
                callback(null)
        })
    }

    StorageManager.prototype.putUsername = function (username) {
        store({ user: username })
    }

    StorageManager.prototype.getUsername = function (callback) {
        fetch(['user'], function (items) {
            if (items.user)
                callback(items.user)
            else
                callback(null)
        })
    }

    StorageManager.prototype.putOrgName = function (orgName) {
        store({ org: orgName })
    }

    StorageManager.prototype.getOrgName = function (responseCallback) {
        fetch(['org'], function (items) {
            if (items.org)
                responseCallback(items.org)
            else
                responseCallback(null)
        })
    }

    StorageManager.prototype.putConfigProfile = function (profile) {
        store({ profile: profile })
    }

    StorageManager.prototype.getConfigProfile = function (responseCallback) {
        fetch(['profile'], function (items) {
            if (items.profile)
                responseCallback(items.profile)
            else
                responseCallback(null)
        })
    }

    StorageManager.prototype.addTabToRefresh = function (tabId, url) {
        if (url.indexOf('chrome') === 0) {
            xlog('Not adding tab to refresh trusted url:', url)
        } else {
            this.getTabsToRefresh(function (tabsToRefresh) {
                if (!tabsToRefresh) {
                    tabsToRefresh = {}
                }
                tabsToRefresh[tabId] = url
                xlog('Adding tab to refresh (id=' + tabId + ', url=' + url + ')')
                store({ tabsToRefresh: tabsToRefresh })
            })
        }
    }

    StorageManager.prototype.removeTabToRefresh = function (tabId, callback) {
        this.getTabsToRefresh(function (tabsToRefresh) {
            if (tabsToRefresh) {
                if (tabsToRefresh[tabId]) {
                    xlog('Deleting tab to refresh (id=' + tabId + ')')
                    delete tabsToRefresh[tabId]
                    store({ tabsToRefresh: tabsToRefresh }, function () {
                        callback()
                    })
                } else {
                    xwarn('Unable to delete tab to refresh (id=' + tabId + ') tabId not found in tabsToRefresh')
                    callback()
                }
            } else {
                xwarn('Unable to delete tab to refresh (id=' + tabId + ') tabsToRefresh not found')
                callback()
            }
        })
    }

    StorageManager.prototype.clearTabsToRefresh = function (callback) {
        remove('tabsToRefresh')
    }

    StorageManager.prototype.getTabsToRefresh = function (callback) {
        fetch(['tabsToRefresh'], function (items) {
            if (items.tabsToRefresh)
                callback(items.tabsToRefresh)
            else
                callback(null)
        })
    }

    StorageManager.prototype.getRegistrationStatus = function (callback) {
        fetch(['registrationStatus'], function (items) {
            if (items.registrationStatus)
                callback(items.registrationStatus)
            else
                callback(null)
        })
    }

    StorageManager.prototype.setRegistrationStatus = function (status) {
        if (status === 'active' || status === 'idle')
            store({ 'registrationStatus': status })
        else
            xwarn('Unable to store registration status illegal status value:', status)
    }

    StorageManager.prototype.getMixpanelLastHeartbeatDate = function (callback) {
        fetch(['mixpanelLastHeartbeatDate'], function (items) {
            if (items.mixpanelLastHeartbeatDate) {
                if (callback)
                    callback(new Date(Date.parse(items.mixpanelLastHeartbeatDate)))
            } else {
                if (callback)
                    callback(null)
            }
        })
    }

    StorageManager.prototype.setMixpanelLastHeartbeatDate = function (date) {
        if (date) {
            if (date instanceof Date)
                store({ 'mixpanelLastHeartbeatDate': date.toJSON() })
            else
                xwarn('Unable to store last heartbeat date not instanceof Date')
        } else {
            xwarn('Unable to store last heartbeat date date is null')
        }
    }

    exports.StorageManager = StorageManager

})(window)
