// GET
$.ajax('/url/to/target/resource',
    {
        success: (data, status, xhr) => {
            console.log(`data: ${data}`)
        }
    })

// GET JSON
$.ajax('/url/to/target/resource',
    {
        dataType: 'json', // type of response data
        timeout: 500,
        success: (data, status, xhr) => {
            console.log(`data: ${data}`)
        },

        error: (jqXhr, textStatus, errorMessage) => {
            console.log(errorMessage)
        }
    })

// POST
$.ajax('/url/to/target/resource', {
    type: 'POST', // type of HTTP method

    // data to be sent over the wire
    data: {
        age: 13,
        name: 'xilu',
        description: 'I have been working very hard'
    },

    // callback when successful
    success: (data, status, xhr) => {
        console.log(`data: ${data}`)
        console.log(`status: ${status}`)
    },

    // callback when in error
    error: (jqXhr, textStatus, errorMessage) => {
        console.log(errorMessage)
    }
})
