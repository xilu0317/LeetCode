// ES6 map is ganrenteed to have O(1) lookup in V8 based browsers/Chrome
// Essentially ES6 map is an ordered hash table

// https://stackoverflow.com/questions/33611509/es6-map-and-set-complexity-v8-implementation?lq=1
// https://codereview.chromium.org/220293002/

class LRUCache {
    constructor(num) {
        // capacity = number of elements allowed in the lRU
        this.capacity = num;
        this.map = new Map();
    }

    get(key) {
        // Javascript map is O(1) access in V8 and at most sub-linear
        const val = this.map.get(key);

        if (!val) return -1;

        // Remove the key
        this.map.delete(key);

        // Re-queue the key
        // Keys in js are ordered by insertion order
        this.map.set(key, val);

        return val;
    }

    put(key, value) {
        // Remove the key it exists
        this.map.delete(key);
        // Update to the new value
        this.map.set(key, value);

        // Get keys iterator
        const keys = this.map.keys();
        // Note the iterator is ordered by the insertion order
        while (this.map.size > this.capacity) {
            this.map.delete(keys.next().value);
        }
    }
}