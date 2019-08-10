// ES6 class
class Trie {
    constructor() {
        // instance variable
        // `{}` same as an new object
        this.root = {};
    }

    insert(word) {
        let cur = this.root;
        for (const c of word) {
            // if cur[c] exists use current, otherwise create an new object
            cur[c] = cur[c] || {};
            // update the `cur` pointer
            cur = cur[c];
        }
        cur.isWord = true;
    }

    traverse(word) {
        let cur = this.root;
        for (const c of word) {
            if (!cur) return null;
            cur = cur[c];
        }

        return cur;
    }

    search(word) {
        // if the last node exists and the terminal flag is true, then the word is found
        let lastNode = this.traverse(word);

        // `!!` is a common pratice to booleaniz variables
        return !!lastNode && !!lastNode.isWord;
    }

    startsWith(word) {
        return !!this.traverse(word);
    }
}

// Old function as object style
function Trie() {
    const root = {};

    return { insert, search, startsWith };

    function insert(word) {
        let cur = root;
        word.split('').forEach(c => cur = cur[c] = cur[c] || {});
        cur.isWord = true;
    }

    function traverse(word) {
        let cur = root;
        word.split('')
            .forEach(c => {
                if (!cur) return null;
                cur = cur[c];
            });

        return cur;
    }

    function search(word) {
        let node = traverse(word);

        return !!node && !!node.isWord;
    }

    function startsWith(word) {
        return !!traverse(word);
    }
}
