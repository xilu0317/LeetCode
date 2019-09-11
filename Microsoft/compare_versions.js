const compareVersion = (v1, v2) => {
    // use parseInt for numerical comparison
    let list1 = v1.split(/\./).map(x => parseInt(x));
    let list2 = v2.split(/\./).map(x => parseInt(x));

    let len1 = list1.length, len2 = list2.length

    let minLen = Math.min(len1, len2)
    let maxLen = Math.max(len1, len2);

    // define 'i' outside the for loop to obtain more scope
    let i;
    for (i = 0; i < minLen; i++) {
        if (list1[i] > list2[i]) {
            return 1;
        }
        if (list1[i] < list2[i]) {
            return -1
        }
    }

    // don't forget to increment 'i'
    while (i < maxLen) {
        if (list1[i] > 0) {
            return 1;
        }
        if (list2[i] > 0) {
            return -1;
        }
        i++;
    }

    return 0;
};
