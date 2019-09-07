const digitSum = (num) => {
	let res = 0;
	while (num) {
		let tmp = num % 10;
		res += tmp;
		num = parseInt(num / 10);
	}
	return res;
}

const addDigits = (num) => {
	do {
		num = digitSum(num);
		//console.log(num)
	} while (num / 10 >= 1);

	return num;
};