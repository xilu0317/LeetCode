// https://www.geeksforgeeks.org/design-a-data-structure-that-supports-insert-delete-search-and-getrandom-in-constant-time/

// All operations need to be O(1) time-complexity
class RandomizedSet {
    constructor() {
        this.list = [];
        this.dict = {};
    }

    // insert(x)
    // 1) Check if x is already present by doing a hash map lookup.
    // 2) If not present, then insert it at the end of the array.
    // 3) Add in the hash table also, x is added as key and last array index as the index.
    insert(x) {
        if (!this.dict[x]) {
            this.list.push(x);
            this.dict[x] = this.list.length - 1;
        }
    }

    // remove(x)
    // 1) Check if x is present by doing a hash map lookup.
    // 2) If present, then find its index and remove it from a hash map.
    // 3) Swap the last element with this element in an array and remove the last element.
    // Swapping is done because the last element can be removed in O(1) time.
    // 4) Update index of the last element in a hash map.
    remove(x) {
        let index = this.dict[x];

        if (index >= 0) {
            delete this.dict[x];

            // ES6
            [this.list[index], this.list[this.list.length - 1]] = [this.list[this.list.length - 1], this.list[index]];
            this.list.length--;
        }

        this.dict[x] = this.list.length - 1;
    }

    // getRandom()
    // 1) Generate a random number from 0 to last index.
    // 2) Return the array element at the randomly generated index.
    getRandom() {
        let randIndex = parseInt(Math.random() * this.list.length);

        return this.list[randIndex];
    }

    // search(x)
    // Do a lookup for x in hash map.
    search(x) {
        return this.dict[x];
    }
}
