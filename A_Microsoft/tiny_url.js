let long2short = {}
let short2long = {}

const encode = (longUrl) => {
    let shortUrl = parseInt(Math.random() * Number.MAX_SAFE_INTEGER).toString(36)

    // forward
    long2short[longUrl] = shortUrl
    // backword
    short2long[shortUrl] = longUrl

    return 'http://tinyurl.com/' + shortUrl
}

const decode = (shortUrl) => {
    let start = shortUrl.indexOf('m/')

    shortUrl = shortUrl.substring(start + 2)

    return short2long[shortUrl]
}
