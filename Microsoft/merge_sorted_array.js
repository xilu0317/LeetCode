// hint: go from back to front
const merge = (nums1, m, nums2, n) => {
    let i = m - 1;
    let j = n - 1;
    let k = m + n - 1;

    // note smaller values needs to be in the front
    // so larger values would be in the back

    while (i >= 0 && j >= 0) {
        if (nums1[i] > nums2[j])
            nums1[k--] = nums1[i--];
        else
            nums1[k--] = nums2[j--];
    }

    // finish the rest
    while (j >= 0) nums1[k--] = nums2[j--];
};
