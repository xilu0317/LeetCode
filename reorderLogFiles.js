function compare(a, b) {
    let i = a.indexOf(' ');
    const at = a.substring(i + 1);
    i = b.indexOf(' ');
    const bt = b.substring(i + 1);
    return at.localeCompare(bt);
}

var reorderLogFiles = function(logs) {
    const letterLogs = [];
    const digitLogs = [];
    for (const l of logs) {
        const charCode = l.charCodeAt(l.length - 1);
        if (charCode <= 57 && charCode >= 48) {
            digitLogs.push(l);
        } else {
            letterLogs.push(l);
        }
    }
    letterLogs.sort(compare); 
    return [...letterLogs, ...digitLogs];
};