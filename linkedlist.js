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

/**
 * @param Node
 */
Queue.prototype.append = function(node) {
  if (!this.head){
    this.head = node;
    this.tail = this.head;
  }
  
  if (this.count >= this.capacity) {
    let temp = this.head;
    this.head = this.head.next;
    this.count--;

    // purge the old `head`
    temp.next = null;
    temp.value = null;
  }

  this.tail.next = node;
  this.tail = this.tail.next;
  this.count++;
}

// LRU Cache
/**
 * @param capacity
 */
var LRUCache = function(capacity){
  this.capacity = capacity;
  this.queue = new Queue(capacity);
  this.dict = {};
}

/**
 * @param key
 */
LRUCache.prototype.get = function(key){
  let node = this.dict[key];
  if (node){
    let fast = this.queue.head.next;
    let slow = this.queue.head;

    while (true) {
      if (fast === node){
        break;
      }

      fast = fast.next;
      slow = slow.next;
    }

    slow.next = fast.next;
    this.queue.tail.next = fast;
    fast.next = null;
  }

  return this.dict[key];
}

/**
 * @param key
 * @param value
 */
LRUCache.prototype.put = function(key, value) {
  let newNode = new Node(value);
  this.dict[key] = newNode;
  this.queue.append(newNode);
}

// Main
var cache = new LRUCache( 2 /* capacity */ );

try {
  cache.put(1, 1);
  cache.put(2, 2);
  cache.get(1);       // returns 1
  cache.put(3, 3);    // evicts key 2
  cache.get(2);       // returns -1 (not found)
  cache.put(4, 4);    // evicts key 1
  cache.get(1);       // returns -1 (not found)
  cache.get(3);       // returns 3
  cache.get(4);       // returns 4
} catch (error) {
  console.log(error.stack);
}
