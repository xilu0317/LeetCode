// ES6 class
class Trie {
    constructor() {
        // This is how you define memeber vars in ES6
        this.root = {};
    }

    // The essence is to build the prefix tree using the insert method
    insert(word) {
        let cur = this.root;
        for (const c of word) {
            // if cur[c] exists use current, otherwise create an new object
            cur[c] = cur[c] || {};
            // update the `cur` pointer
            cur = cur[c];
        }
        // Make sure to flag the last node
        cur.isWord = true;
    }

    // This method will traverse all the way till the last node
    traverse(word) {
        let cur = this.root;
        for (const c of word) {
            if (!cur) {
                return null;
            }
            // Look-up in the current node
            cur = cur[c];
        }

        return cur;
    }

    search(word) {
        // Get the last node
        let lastNode = this.traverse(word);

        // `!!` = converts everything else to bool
        return !!lastNode && !!lastNode.isWord;
    }

    startsWith(word) {
        return !!this.traverse(word);
    }
}

// #2 Old function as object style
function Trie() {
    const root = {};

    return { insert, search, startsWith };

    function insert(word) {
        let cur = root;
        word.split('').forEach(c => cur = cur[c] = (cur[c] || {}));
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
        let lastNode = traverse(word);

        return !!lastNode && !!lastNode.isWord;
    }

    function startsWith(word) {
        return !!traverse(word);
    }
}

// #3 Yet another way to do 'class'
let Trie = function () {

};

Trie.prototype.insert = function (word) {

};

Trie.prototype.search = function (word) {

};

Trie.prototype.startsWith = function (prefix) {

};

