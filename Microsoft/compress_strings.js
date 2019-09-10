// The gist is to use two pointers

const compress = (chars) => {
    let index = i = 0;

    while (i < chars.length) {
        // get the current char
        let cur = chars[i];

        // re-init count to zero for a different char
        let count = 0;
        while (chars[i] === cur) {
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