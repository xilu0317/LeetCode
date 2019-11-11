((exports) => {
    'use strict'

    const store = (json, callback) => {
        chrome.storage.local.set(json, () => {
            if (callback)
                callback()
        })
    }

    const fetch = (keys, callback) => {
        chrome.storage.local.get(keys, (items) => {
            if (callback)
                callback(items)
        })
    }

    const remove = (keys) => {
        chrome.storage.local.remove(keys, () => {
            xlog('Removed keys from local storage:', keys)
        })
    }

    class StorageManager {
        constructor() {
            // nop
        }

        clearAll(callback) {
            chrome.storage.local.clear(() => {
                let success = !chrome.runtime.lastError

                if (success)
                    xlog('Cleared all local storage records.')
                else
                    xwarn('Failed to clear all records message=', lastError.message)

                if (callback)
                    callback(success)
            })
        }

        putDeviceId(deviceId) {
            store({ deviceId: deviceId })
        }

        getDeviceId(callback) {
            fetch(['deviceId'], items => {
                if (items.deviceId)
                    callback(items.deviceId)
                else
                    callback(null)
            })
        }

        putUsername(username) {
            store({ user: username })
        }

        getUsername(callback) {
            fetch(['user'], items => {
                if (items.user)
                    callback(items.user)
                else
                    callback(null)
            })
        }

        putOrgName(orgName) {
            store({ org: orgName })
        }

        getOrgName(responseCallback) {
            fetch(['org'], items => {
                if (items.org)
                    responseCallback(items.org)
                else
                    responseCallback(null)
            })
        }

        putConfigProfile(profile) {
            store({ profile: profile })
        }

        getConfigProfile(responseCallback) {
            fetch(['profile'], (items) => {
                if (items.profile)
                    responseCallback(items.profile)
                else
                    responseCallback(null)
            })
        }

        addTabToRefresh(tabId, url) {
            if (url.indexOf('chrome') === 0) {
                xlog('Not adding tab to refresh trusted url:', url)
            } else {
                this.getTabsToRefresh((tabsToRefresh) => {
                    if (!tabsToRefresh) {
                        tabsToRefresh = {}
                    }

                    tabsToRefresh[tabId] = url

                    xlog('Adding tab to refresh (id=' + tabId + ', url=' + url + ')')

                    store({ tabsToRefresh: tabsToRefresh })
                })
            }
        }

        removeTabToRefresh(tabId, callback) {
            this.getTabsToRefresh((tabsToRefresh) => {
                if (tabsToRefresh) {
                    if (tabsToRefresh[tabId]) {
                        xlog('Deleting tab to refresh (id=' + tabId + ')')

                        delete tabsToRefresh[tabId]

                        store({ tabsToRefresh: tabsToRefresh }, () => {
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

        clearTabsToRefresh(callback) {
            remove('tabsToRefresh')
        }

        getTabsToRefresh(callback) {
            fetch(['tabsToRefresh'], (items) => {
                if (items.tabsToRefresh)
                    callback(items.tabsToRefresh)
                else
                    callback(null)
            })
        }

        getRegistrationStatus(callback) {
            fetch(['registrationStatus'], (items) => {
                if (items.registrationStatus)
                    callback(items.registrationStatus)
                else
                    callback(null)
            })
        }

        setRegistrationStatus(status) {
            if (status === 'active' || status === 'idle')
                store({ 'registrationStatus': status })
            else
                xwarn('Unable to store registration status illegal status value:', status)
        }

        getMixpanelLastHeartbeatDate(callback) {
            fetch(['mixpanelLastHeartbeatDate'], (items) => {
                if (items.mixpanelLastHeartbeatDate) {
                    if (callback)
                        callback(new Date(Date.parse(items.mixpanelLastHeartbeatDate)))
                } else {
                    if (callback)
                        callback(null)
                }
            })
        }

        setMixpanelLastHeartbeatDate(date) {
            if (date) {
                if (date instanceof Date)
                    store({ 'mixpanelLastHeartbeatDate': date.toJSON() })
                else
                    xwarn('Unable to store last heartbeat date not instanceof Date')
            } else {
                xwarn('Unable to store last heartbeat date date is null')
            }
        }
    }

    exports.StorageManager = StorageManager

})(window)
