const search = (nums, target) => {
    if (!nums || !nums.length) return -1;

    let n = nums.length;
    let lo = 0, hi = n - 1;
    // find the index of the smallest value using binary search.
    // Loop will terminate since mid < hi, and lo or hi will shrink by at least 1.
    // Proof by contradiction that mid < hi: if mid==hi, then lo==hi and loop would have been terminated.

    while (lo < hi) {
        let mid = parseInt((lo + hi) / 2);
        if (nums[mid] > nums[hi]) {
            lo = mid + 1;
        } else {
            hi = mid;
        }
    }

    // lo == hi is the index of the smallest value and also the number of places rotated.
    let rot = lo;
    lo = 0, hi = n - 1;
    // The usual binary search and accounting for rotation.
    while (lo <= hi) {
        let mid = parseInt((lo + hi) / 2);
        let realMid = (mid + rot) % n;
        if (nums[realMid] === target) {
            return realMid;
        }
        if (nums[realMid] < target) {
            lo = mid + 1;
        } else {
            hi = mid - 1;
        }
    }

    return -1;
};