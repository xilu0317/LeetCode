const rotate = (matrix) => {
	if (!matrix) return null;

	const len = matrix.length;

	if (len === 1) return matrix;

	matrix.reverse();

	for (let i = 0; i < len; i++) {
		for (let j = 0; j < len; j++) {
			if (i < j) {
				// swap mat[i][j] and mat[j][i]
				[matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
			}
		}
	}
};