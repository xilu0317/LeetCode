// My own easy-to-understand solution
// Check an element from the array
// The set without the element and the set with the elment will make up the powerset
// And this relationship is recursively true as we build up the set

// []
// * Add 1 => [] | [1]
// * Add 2 => [] [1] | [2] [1,2]
// * Add 3 => [] [1] [2] [1,2] | [3] [1,3] [2,3] [1,2,3]

// First inner for loop copies the set which is res[j]

const subsets = (nums) => {
    let res = [];
    res.push([]);

    for (let i = 0; i < nums.length; i++) {
        let len = res.length;

        for (let j = 0; j < len; j++) {
            // KEY [...res[j]] is a fking must, this will provide a new reference for the array!!!
            res.push([...res[j]]);
        }

        for (let j = 0; j < len; j++) {
            res[j].push(nums[i]);
        }
    }

    return res;
};

// From leetcode solution
const subsets_solution = (nums) => {
    return backtrack(nums, 0, [], []);
};

const backtrack = (nums, start, set, res) => {

    res.push(set);

    for (let i = start; i < nums.length; i++) {
        set.push(nums[i]);

        backtrack(nums, i + 1, Array.from(set), res);

        set.pop();
    }

    return res;
};

// [IMPORTANT]
// '[...stack]' or 'Array.from(stack)'
// The above will create a new array with different memeory address/reference
// If we don't use the deep copied array, stack will be the same everywhere.
// In such case, res = [ [1, 2, 3],[1, 2, 3],[1, 2, 3],[1, 2, 3],[1, 2, 3] ] since stack is a shallow copy being shared

// Also note that I intentionally name the current set to stack to remind myself this is a DFS backtrack style problem
// Please study this with Binary Tree pre-order traversal's iterative approach -- the 'notebook + forest exploration story'