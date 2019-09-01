const getSkyline = (buildings) => {
    let res = [], height = [], pq = [0], prevMax = null;

    for (const b of buildings) {
        height.push([b[0], -b[2]]);
        height.push([b[1], b[2]]);
    }
    height.sort((a, b) => {
        if (a[0] === b[0]) return a[1] - b[1];
        return a[0] - b[0];
    });

    for (const h of height) {
        if (h[1] < 0) {
            pq.push(-h[1]);
        } else {
            remove(pq, h[1]);
        }

        let maxV = Math.max(...pq);
        // maxV changed after remove h[1]
        if (prevMax !== maxV) {
            res.push([h[0], maxV]);
            prevMax = maxV;
        }
    }

    return res;
};

// remove the first element equal to val
const remove = (arr, val) => {
    let index = -1;
    for (let i = 0; i < arr.length; i++) {
        if (val === arr[i]) {
            index = i;
            break;
        }
    }

    arr.splice(index, 1);

    return;
};