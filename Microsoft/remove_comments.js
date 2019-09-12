/**
* @param {string[]} source
* @return {string[]}
*/
// TODO: revisit
const removeComments = (source) => {
    let inBlock = false;
    let newline = '';
    let res = [];

    for (let line of source) {
        let i = 0;
        let chars = [...line];
        if (!inBlock) newline = '';

        let len = line.length;
        while (i < len) {
            if (!inBlock && i + 1 < len && chars[i] === '/' && chars[i + 1] == '*') {
                inBlock = true;
                i++;
            } else if (inBlock && i + 1 < len && chars[i] == '*' && chars[i + 1] == '/') {
                inBlock = false;
                i++;
            } else if (!inBlock && i + 1 < len && chars[i] == '/' && chars[i + 1] == '/') {
                break;
            } else if (!inBlock) {
                newline += chars[i];
            }
            i++;
        }

        if (!inBlock && newline.length > 0) {
            res.push(newline);
        }
    }

    return res;
};
