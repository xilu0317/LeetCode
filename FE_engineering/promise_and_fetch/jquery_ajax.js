// GET
$.ajax('/to/your/url/dot/com',
    {
        success: function (data, status, xhr) {
            console.log(`data: ${data}`)
        }
    })

// GET JSON
$.ajax('/to/your/json',
    {
        dataType: 'json', // type of response data
        timeout: 500,
        success: function (data, status, xhr) {
            console.log(`data: ${data}`)
        },

        error: function (jqXhr, textStatus, errorMessage) {
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

    success: function (data, status, xhr) {
        console.log(`data: ${data}`)
        console.log(`status: ${status}`)
    },

    error: function (jqXhr, textStatus, errorMessage) {
        console.log(errorMessage)
    }
})

