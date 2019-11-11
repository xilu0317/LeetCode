// TODO: revisit // SOLUTION NOT CORRECT
const removeComments = (source) => {
    let inBlock = false, newline = '', res = []

    for (let line of source) {
        let i = 0
        if (!inBlock) newline = ''

        let len = line.length
        while (i < len) {
            // when encoutering the start '/*'
            if (!inBlock && i + 1 < len && line[i] === '/' && line[i + 1] == '*') {
                inBlock = true
                i++
                // when encoutering the end '*/'
            } else if (inBlock && i + 1 < len && line[i] == '*' && line[i + 1] == '/') {
                inBlock = false
                i++
                // when encountering '//'
            } else if (!inBlock && i + 1 < len && line[i] == '/' && line[i + 1] == '/') {
                break
            } else if (!inBlock) {
                newline += line[i]
            }
            i++
        }

        if (!inBlock && newline.length > 0) {
            res.push(newline)
        }
    }

    return res
}
