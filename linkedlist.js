// Step 1) high level value
// Step 2) When you are doing the linkedlist, remember to draw some diagram and write the pseudocode

// Node
var Node = function(val) {
  this.val = val;
  this.next = null;
  this.prev = null;
}

// Queue
var Queue = function(capacity) {
  this.capacity = capacity;
  this.count = 0;
  this.head = null;
  this.tail = null;
}

Queue.prototype.enqueue = function(node) {
  if (this.count === 0) {
    this.head = node;
    this.tail = node;
  } else {
    this.tail.next = node;
    node.prev = this.tail;
    this.tail = this.tail.next;
  }
  this.count++;
}

Queue.prototype.dequeue = function() {
  if (this.count > 0) {
    // edge case only 1 element
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      let temp = this.head;
      this.head = this.head.next;
      
      // setting value to null here
      temp.val = null;
  
      temp.next = null;
      this.head.prev = null; 
    }

    // decrement count after dequeue action
    this.count--;
  }
}

Queue.prototype.moveToBack = function(node) {
  if (node === this.head){
    this.tail.next = node;
    this.tail = this.tail.next;
    node.prev = this.tail;
    this.head = this.head.next;
    node.next = null;
    this.head.prev = null;
    node = null;
  } else if (node === this.tail) {
    // NOP already at the back
  } else if ( this.head === this.tail) {
    // No need to move anything for just 1 element
  } else {
    node.prev = node.next;
    node.next.prev = node.prev;
    this.tail.next = node;
    node.prev = this.tail;
    node.next = null;
    node = null;
  }

}

// LRU Cache
var LRUCache = function(capacity){
  this.capacity = capacity;
  this.queue = new Queue(capacity);
  this.dict = {};
}

LRUCache.prototype.get = function(key){
  var node = this.dict[key];
  
  if (node !== undefined && node !== null && node.val !== null) {
    this.queue.moveToBack(node);
  } else {
    return -1;
  }

  return node.val;
}

LRUCache.prototype.put = function(key, value) {
  let node = this.dict[key];
  if (node) {
    node.value = value;
    this.queue.moveToBack(node);
  } else {
    let node = new Node(value);
    this.dict[key] = node;
    if (this.queue.count >= this.capacity) {
      this.queue.dequeue();
    }
    this.queue.enqueue(node);
  }
}

// TODO: Testing code:
var cache = new LRUCache( 3 /* capacity */ );

try {
  cache.put(1, 1);
  cache.put(2, 2);
        // returns 1
  cache.put(3, 3);    // evicts key 2
  cache.put(4, 4);    // evicts key 2
  cache.get(4);       // returns -1 (not found)
  cache.get(3);       // returns -1 (not found)
  cache.get(2);       // returns -1 (not found)
  cache.get(1);       // returns -1 (not found)
  cache.put(5, 5);    // evicts key 2
  cache.get(1);       // returns -1 (not found)
  cache.get(2);       // returns -1 (not found)
  cache.get(3);       // returns -1 (not found)
  cache.get(4);       // returns -1 (not found)
  cache.get(5);       // returns -1 (not found)
} catch (error) {
  console.log(error.stack);
}
