const compress = (chars) => {
    let index = 0; i = 0;

    while (i < chars.length) {
        let cur = chars[i];

        let count = 0;
        while (i < chars.length && chars[i] === cur) {
            i++;
            count++;
        }

        chars[index++] = cur;
        if (count !== 1) {
            count += '';
            for (let c of count) {
                chars[index++] = c;
            }
        }
    }

    return index;
};