const subdomainVisits = (cpdomains) => {
    let dict = {};
    for (let word of cpdomains) {
        let arr = word.split(/\s+/);
        dict[arr[1]] = parseInt(arr[0]);
    }

    let dict2 = {};
    let keys = Object.keys(dict);
    for (let key of keys) {
        let arr = key.split('.').reverse();
        let temp = '';
        for (let item of arr) {
            temp += item;
            if (dict2[temp])
                dict2[temp] += dict[key];
            else
                dict2[temp] = dict[key];
            temp += '.';
        }
    }

    let res = [];
    let keys2 = Object.keys(dict2);
    for (let key of keys2) {
        let val = dict2[key];
        res.push(val + ' ' + key.split('.').reverse().join('.'));
    }

    return res;
};
