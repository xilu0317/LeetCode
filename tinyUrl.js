// encode url

// global variables
let long2short = {};
let short2long = {};
let domainName = null;

const encode = (longUrl) => {
    domainName = extractDomainName(longUrl);

    let shortKey = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(36);

    if (long2short[longUrl]) {
        return domainName + '/' + long2short[longUrl];
    }

    // need two dictionaries
    short2long[shortKey] = longUrl;
    long2short[longUrl] = shortKey;

    return domainName + '/' + shortKey;
};

const decode = (shortUrl) => {
    return short2long[shortUrl.split(domainName + '/')[1]];
};

const extractDomainName = (url) => {
    let num = url.match(/[a-zA-Z]\/[A-Za-z0-9]/).index + 1;
    return url.substring(0, num);
};