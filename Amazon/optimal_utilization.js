// https://leetcode.com/discuss/interview-question/373202/Amazon-or-OA-2019-or-Optimal-Utilization

// TODO: REVISIT still some bugs here
(() => {
    a = [[1, 3], [2, 5], [3, 7], [4, 10]];
    b = [[1, 2], [2, 3], [3, 4], [4, 5]];
    target = 10;

    const twoSumClosest = (a, b, target) => {
        let i = 0; j = b.length - 1;
        let min = Infinity;
        while (i < a.length && j >= 0) {

            min = Math.min(min, target - a[i][1] - b[j][1]);
            if (a[i][1] + b[j][1] >= target) break;

            if (a[i][1] + b[j][1] > target)
                j--;
            else if (a[i][1] + b[j][1] < target)
                i++;
        }

        let res = [];
        let dict = {};
        // for (let i = 0; i < b.length; i++) {
        // 	dict[b[i][1]] = b[i][0];
        // }

        // for (let i = 0; i < a.length; i++) {
        // 	if (a[i][1] + )
        // }

        return res;
    };

    let stuff = twoSumClosest(a, b, target);
    console.log('solution = ', stuff);
})();
