let long2short = {};
let short2long = {};

const encode = (longUrl) => {
    let shortUrl = parseInt((Math.random() * Infinity)).toString(36);

    // forward
    long2short[longUrl] = shortUrl;
    // backword
    short2long[shortUrl] = longUrl;

    return 'http://tinyurl.com/' + shortUrl;
};

const decode = (shortUrl) => {
    let index = shortUrl.indexOf("m/");
    shortUrl = shortUrl.substring(index + 2);

    return short2long[shortUrl];
};
