// GET
$.ajax('/to/your/url/dot/com',
    {
        success: (data, status, xhr) => {
            console.log(`data: ${data}`)
        }
    })

// GET JSON
$.ajax('/to/your/json',
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
$.ajax('/to/your/url/dot/com', {
    type: 'POST',

    data: {
        age: 13,
        name: 'xilu',
        description: 'I have been working very hard'
    },

    success: (data, status, xhr) => {
        console.log(`data: ${data}`)
        console.log(`status: ${status}`)
    },

    error: (jqXhr, textStatus, errorMessage) => {
        console.log(errorMessage)
    }
})

