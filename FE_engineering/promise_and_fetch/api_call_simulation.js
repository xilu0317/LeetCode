const uuid = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
        const r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8)
        return v.toString(16)
    })
}

const callApiEndpoint = (time = 800, rejectFlag = false) => new Promise((resolve, reject) => {
    const obj = {}
    obj.id = uuid()
    obj.date = new Date().toLocaleString()
    obj.description = 'This object is used to simulate a remote api call'

    if (rejectFlag)
        setTimeout(() => reject('This API call has been rejected'), time)
    else
        setTimeout(() => resolve(obj), time)
})

// successful api call 
await callApiEndpoint()

// rejected api call
await callApiEndpoint(800, true)