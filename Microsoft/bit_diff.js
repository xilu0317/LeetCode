//  depending on the definition
const hammingWeight = (n) => {
	return [...n.toString(2)].filter(x => x === '1').length;
};

const bitDiff = (a, b) => {
	return Math.abs(hammingWeight(a) - hammingWeight(b));
};

const bitDiff2 = (a, b) => {
	let aStr = a.toString(2);
	let bStr = b.toString(2);

	let len = a > b ? a : b;

	aStr = aStr.padStart(len, '0');
	bStr = bStr.padStart(len, '0');

	return aStr ^ bStr;
};




