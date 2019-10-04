// https://leetcode.com/discuss/interview-question/373202/Amazon-or-OA-2019-or-Optimal-Utilization

// TODO: REVISIT still some bugs here
(() => {

    a = [[1, 8], [2, 7], [3, 14]]
    b = [[1, 5], [2, 10], [3, 14]]
    target = 20

    // a = [[1, 3], [2, 5], [3, 7], [4, 10]];
    // b = [[1, 2], [2, 3], [3, 4], [4, 5]];
    // target = 10;

    const twoSumClosest = (a, b, target) => {
        let i = 0; j = b.length - 1;
        let min = Infinity;

        // just identify the min in the first pass
        while (i < a.length && j >= 0) {
            if (target - a[i][1] - b[j][1] < 0)
                break;

            min = Math.min(min, target - a[i][1] - b[j][1]);

            if (a[i][1] + b[j][1] > target)
                j--;
            else if (a[i][1] + b[j][1] < target)
                i++;
            else
                break;
        }

        let dict = {};
        for (let i = 0; i < b.length; i++) {
            dict[b[i][1]] = b[i][0];
        }

        let res = [];
        for (let i = 0; i < a.length; i++) {
            let goal = target - min - a[i][1];
            if (dict[goal]) {
                res.push([a[i][0], dict[goal]]);
            }
        }

        return res;
    };

    console.log('fuck it ');
    let stuff = twoSumClosest(a, b, target);
    console.log('solution = ', stuff);
    console.log('done');
})();
