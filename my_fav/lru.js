class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.map = new Map();
    }

    get(key) {
        // Javascript map is O(1) access
        let val = this.map.get(key);

        if (!val) return -1;

        // remove the key
        this.map.delete(key);

        // Re-queue the key
        // Keys in js are ordered by insertion order
        this.map.set(key, val);

        return val;
    }

    put(key, value) {
        // Remove the key it exists
        if (this.map.has(key)) {
            this.map.delete(key);
        }
        // Update to the new value
        this.map.set(key, value);

        // Get keys iterator
        let keys = this.map.keys();
        while (this.map.size > this.capacity) {
            this.map.delete(keys.next().value);
        }
    }
}