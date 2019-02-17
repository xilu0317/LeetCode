var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.dict = {};
    this.arr = [];
};

LRUCache.prototype._updateDictIndexShiftLeft = function() {
  for (let key in this.dict){
    this.dict[key]--;

    if (this.dict[key] < 0) {
      delete this.dict[key];
    }
  }
};

LRUCache.prototype.get = function(key) {
  // first extract value before everything is altered
  // key -> index -> value
  let value = this.arr[this.dict[key]];

  // early exit to avoid going through the rest of the code
  // !value will return true 
  if (!value){
    return value;
  }
  
  if (this.arr.length == this.capacity) {
    this.arr.shift();
    this._updateDictIndexShiftLeft();
  }

  

  this.dict[key] = this.arr.push(value) - 1;

  return value;
};

// if capacity is met, shift left then push new value,
// otherwise just push value

// key -> value (index)

LRUCache.prototype.put = function(key, value) {
  // entry eviction only happens when the capacity is met
  if (this.arr.length == this.capacity) {
    this.arr.shift();
    this._updateDictIndexShiftLeft();
  }

  // index adjustment 
  let index = this.arr.push(value) - 1;

  // point at the index instead of the value
  this.dict[key] = index ;
};

let cache = new LRUCache(3);

cache.put(1, 1);
cache.put(2, 2);
cache.put(3, 3);
cache.put(4, 4);
cache.put(5, 5);
cache.put(6, 6);
cache.put(7, 7);





cache.get(1);       // returns 1
cache.get(7);       // returns 1

cache.put(3, 3);    // evicts key 2
cache.get(2);       // returns -1 (not found)
cache.put(4, 4);    // evicts key 1
cache.get(1);       // returns -1 (not found)
cache.get(3);       // returns 3
cache.get(4);       // returns 4

 