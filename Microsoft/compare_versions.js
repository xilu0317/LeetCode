const compareVersion = (v1, v2) => {
    const list1 = v1.split(/\./).map(x => parseInt(x));
    const list2 = v2.split(/\./).map(x => parseInt(x));

    const lenMin = Math.min(list1.length, list2.length)
    const lenMax = Math.max(list1.length, list2.length);

    // define 'i' outside the for loop to obtain more scope
    let i;
    for (i = 0; i < lenMin; i++) {
        if (list1[i] > list2[i]) {
            return 1;
        }
        if (list1[i] < list2[i]) {
            return -1
        }
    }

    while (i < lenMax) {
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
