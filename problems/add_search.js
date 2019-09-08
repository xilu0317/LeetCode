class TrieNode {
    constructor() {
        this.children = {};
        this.isEnd = false;
    }
}

class WordDictionary {
    constructor() {
        this.root = new TrieNode();
    }

    /**
     * Adds a word into the data structure.
     * @param {string} word
     * @return {void}
     */
    addWord(word) {
        let cur = this.root;
        for (let i = 0; i < word.length; i++) {
            if (!(word[i] in cur.children)) {
                cur.children[word[i]] = new TrieNode();
            }
            cur = cur.children[word[i]];
        }
        cur.isEnd = true;
    }

    /**
     * Returns if the word is in the data structure. 
     * A word could contain the dot character '.' to represent any one letter.
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        const search = (cur, level) => {
            if (!cur || (level === word.length && !cur.isEnd)) {
                return false;
            }

            if (level === word.length && cur.isEnd) {
                return true;
            }

            if (word[level] === '.') {
                for (let i = 0; i < 26; i++) {
                    const ch = String.fromCharCode(97 + i);
                    if (search(cur.children[ch], level + 1)) {
                        return true;
                    }
                }

                return false;
            }

            return search(cur.children[word[level]], level + 1);
        };

        return search(this.root, 0);
    }
}
