class LRUCache {
    constructor(capacity) {
        // capacity = number of elements allowed to put in a map
        this.capacity = capacity;
        this.map = new Map();
    }

    get(key) {
        // Javascript map is O(1) access
        let val = this.map.get(key);

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