// DP
const wordBreak = (s, wordDict) => {
    let dp = Array(s.length + 1).fill(false)
    dp[0] = true

    for (let i = 1; i <= s.length; i++) {
        for (let j = 0; j < i; j++) {
            if (dp[j] && wordDict.includes(s.substring(j, i))) {
                dp[i] = true
                break
            }
        }
    }

    return dp[s.length]
}

// BFS
const wordBreak = (s, wordDict) => {
    let n = s.length
    // Use this set to mark if the node has been visited or not
    let visited = new Set()

    // Just treat the indices as nodes
    let q = [0]
    while (q.length) {
        let i = q.shift()

        if (!visited.has(i)) {
            visited.add(i)

            // For current index, check the dictionary
            for (let word of wordDict) {
                let m = word.length
                if (i + m <= n && s.substring(i, i + m) === word) {
                    // If we can reach the end node, then we must have found the word break
                    if (i + m === n) return true

                    q.push(i + m)
                }
            }
        }
    }

    return false
}

// DFS is very similar to BFS
