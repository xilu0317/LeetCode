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

// ES6 class
class Trie {
	constructor() {
		this.root = {};
	}

	insert(word) {
		let cur = this.root;
        word.split('').forEach(ch => cur = cur[ch] = cur[ch] || {});
        cur.isWord = true;
	}

	traverse(word) {
		let cur = this.root;
        for (let i = 0; i < word.length; i++) {
            if (!cur) return null;
            cur = cur[word[i]];
		}
		
        return cur;
	}

	search(word) {
		let node = this.traverse(word);
		
        return !!node && !!node.isWord;
	}

	startsWith(word) {
		return !!this.traverse(word);
	}
}



