// public class Solution {
//     public int subarraySum(int[] nums, int k) {
//         int sum = 0, result = 0;
//         Map < Integer, Integer > preSum = new HashMap<>();
//         preSum.put(0, 1);

//         for (int i = 0; i < nums.length; i++) {
//             sum += nums[i];
//             if (preSum.containsKey(sum - k)) {
//                 result += preSum.get(sum - k);
//             }
//             preSum.put(sum, preSum.getOrDefault(sum, 0) + 1);
//         }

//         return result;
//     }
// }

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const subarraySum = (nums, k) => {
    let sum = 0, res = 0;
    let map = new Map();

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        if (map.has(sum - k)) {
            res += map.get(sum - k);
        }

        map.set(sum, map.get(sum) + 1 || + 1);
    }

    return res;
};
