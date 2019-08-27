/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
const wordBreak = (s, wordDict) => {
    let dp = Array(s.length + 1).fill(false);
    dp[0] = true;

    for (let i = 1; i <= s.length; ++i) {
        for (let j = 0; j < i; ++j) {
            if (dp[j] && wordDict.includes(s.substring(j, i))) {
                dp[i] = true;
                break;
            }
        }
    }

    return dp[s.length];
};

// BFS
const wordBreak = (s, wordDict) => {
    let q = [];
    let n = s.length;
    let visited = new Set();

    q = [0];
    while (q.length) {
        let i = q.shift(); // dequeue
        if (!visited.has(i)) {
            visited.add(i);

            // for current index, check the dictionary
            for (let word of wordDict) {
                let m = word.length;
                if (i + m <= n && s.substring(i, i + m) === word) {
                    if (i + m === n) {
                        return true;
                    }
                    q.push(i + m);
                }
            }
        }
    }

    return false;
};

// DFS
const wordBreak = (s, wordDict) => {
    let stack = [];
    let n = s.length;
    let visited = new Set();

    stack = [0];
    while (stack.length) {
        let i = stack.pop(); // only difference!
        if (!visited.has(i)) {
            visited.add(i);
            
            for (let word of wordDict) {
                let m = word.length;
                if (i + m <= n && s.substring(i, i + m) === word) {
                    if (i + m === n) {
                        return true;
                    }
                    stack.push(i + m);
                }
            }
        }
    }

    return false;
};