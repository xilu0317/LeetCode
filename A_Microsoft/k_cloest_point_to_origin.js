const flat = (arr) => {
	return arr.reduce((a, b) => a.concat(b))
}

const kClosest = (points, K) => {
	let dictArr = []
	for (let p of points) {
		let dist = p[0] * p[0] + p[1] * p[1]

		dictArr.push([dist, p])
	}

	dictArr.sort((a, b) => a[0] > b[0] ? 1 : -1)
	dictArr.length = K

	return flat(dictArr).filter((v, k) => k % 2 !== 0)
}