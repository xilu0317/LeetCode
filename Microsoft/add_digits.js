const digitSum = (num) => {
    let res = 0;
    while (num) {
        // get the number from one's place
        let tmp = num % 10;
        res += tmp;
        // 'parseInt' is cleaner than Math.floor()
        num = parseInt(num / 10);
    }

    return res;
};

const addDigits = (num) => {
    do {
        num = digitSum(num);
    } while (num / 10 >= 1);

    return num;
};
