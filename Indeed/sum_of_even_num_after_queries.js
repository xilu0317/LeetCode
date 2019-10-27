const sumEvenAfterQueries = (A, queries) => {
    if (!queries || !queries.length) return [0];

    let res = [];

    for (let query of queries) {
        let val = query[0];
        let index = query[1];

        A[index] = A[index] || 0;
        A[index] += val;

        let sum = 0;
        for (let item of A) {
            if (item % 2 === 0)
                sum += item;
        }
        res.push(sum);
    }

    return res;
};
