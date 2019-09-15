// Don't need this for the latest nodejs runtime
const flat = (arr) => {
	return arr.reduce((a, b) => a.concat(b));
};

const kClosest = (points, K) => {
	let dictArr = [];
	for (let point of points) {
		let distanceSquare = point[0] * point[0] + point[1] * point[1];
		dictArr.push([distanceSquare, point]);
	}

	dictArr.sort((a, b) => a[0] > b[0] ? 1 : -1);
	dictArr.length = K;

	return flat(dictArr).filter((v, k) => k % 2 !== 0);
};