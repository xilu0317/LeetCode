const compareVersion = (v1, v2) => {
    const list1 = v1.split(/\./).map(x => parseInt(x));
    const list2 = v2.split(/\./).map(x => parseInt(x));

    const len1 = list1.length;
    const len2 = list2.length;

    let len = Math.min(len1, len2);
    let lenM = Math.max(len1, len2);

    let i;
    for (i = 0; i < len; i++) {
        if (list1[i] > list2[i]) {
            return 1;
        }
        if (list1[i] < list2[i]) {
            return -1
        }
    }

    while (i < lenM) {
        if (list1[i] > 0) {
            return 1;
        }
        if (list1[i] > 0) {
            return -1;
        }
        i++;
    }

    return 0;
};

compareVersion('1', '1.1');