const findPeak = (A, left, right) => {
	// Exit conditions
	// This is kinda whacky because when the left and right are shrinking into
	// two elements they need special handling, otherwise it will always return
	// the previous element of the two because of the nature of Math.floor
	if (Math.abs(left - right) <= 1) {
		return A[left] > A[right] ? left : right;
	}

	mid = parseInt((left + right) / 2);

	// typical case
	if (A[mid - 1] < A[mid] && A[mid] > A[mid + 1]) {
		return mid;
	} else if (A[mid - 1] < A[mid] && A[mid] < A[mid + 1]) {
		return findPeak(A, mid + 1, right);
	} else {
		return findPeak(A, left, mid - 1);
	}
};

const findPeakElement = (A) => {
	return findPeak(A, 0, A.length - 1);
};
