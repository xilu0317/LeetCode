const uuid = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
        const r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8)
        return v.toString(16)
    })
}

const callApiEndpoint = (time = 800, rejectFlag = false) => new Promise((resolve, reject) => {
    if (rejectFlag)
        setTimeout(() => reject('API call failed'), time)
    else
        setTimeout(() => resolve('API Call succeeded'), time)
})

// successful api call 
await callApiEndpoint()

// rejected api call
await callApiEndpoint(800, true)