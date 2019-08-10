class Trie {
	constructor() {
        // instance variable
		this.root = {};
	}

	insert(word) {
		let cur = this.root;
        for (let c of word) {
            cur[c] =  cur[c] || {};
            // update the `cur` pointer
            cur = cur[c];
        }
        cur.isWord = true;
	}

	traverse(word) {
		let cur = this.root;
        for (let c of word) {
            if (!cur) return null;
            cur = cur[c];
		}
		
        return cur;
	}

	search(word) {
        // if the last node exists and the terminal flag is true, then the word is found
		let node = this.traverse(word);
		
        // `!!` is a common pratice to booleaniz variables
        return !!node && !!node.isWord;
	}

	startsWith(word) {
		return !!this.traverse(word);
	}
}

// Old function object style
function Trie() {
	const root = {};
	
    return { insert, search, startsWith };
    
    function insert(word) {
        let cur = root;
        word.split('').forEach(ch => cur = cur[ch] = cur[ch] || {});
        cur.isWord = true;
    }
    
    function traverse(word) {
        let cur = root;
        for (let i = 0; i < word.length; i++) {
            if (!cur) return null;
            cur = cur[word[i]];
		}
		
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
