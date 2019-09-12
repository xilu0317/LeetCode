const generate = (numRows) => {
    let a = [];
    for (let i = 0; i < numRows; i++) {
        let temp = new Array(numRows).fill(0);
        temp[0] = 1;
        a[i] = temp;
    }

    for (let i = 0; i < numRows; i++) {
        for (let j = 1; j < numRows; j++) {
            if (i > j) {
                if (i >= 1) {
                    a[i][j] = a[i - 1][j - 1] + a[i - 1][j];
                }
            } else if (i === j) {
                a[i][j] = 1;
            }
        }
    }

    for (let i = 0; i < numRows; i++) {
        while (a[i][a[i].length - 1] === 0) {
            a[i].pop();
        }
    }

    return a;
};

// test case
console.log(generate(4));
