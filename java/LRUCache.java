import java.util.HashMap;
import java.util.Map;

class Node {
    public int key;
    public int value;
    public Node prev;
    public Node next;

    Node(int key, int value) {
        this.key = key;
        this.value = value;
    }
}

// TODO: revisit
class LRUCache {
    public Node head;
    public Node tail;
    public Map<Integer, Node> map;
    public int cap = 0;

    LRUCache(int capacity) {
        this.cap = capacity;
        this.map = new HashMap<>();
    }

    int get(int key) {
        if (map.get(key) == null) {
            return -1;
        }

        Node n = map.get(key);

        shift(n);
        push(n);

        return n.value;
    }

    void put(int key, int value) {
        if (map.containsKey(key)) {
            Node n = map.get(key);
            n.value = value;

            shift(n);
            push(n);
        } else {
            // oversized input
            if (map.size() >= cap) {
                // delete head
                map.remove(head.key);
                shift(head);
            }

            Node n = new Node(key, value);
            push(n);
            map.put(key, n);
        }
    }

    void shift(Node cur) {
        if (cur.prev != null) {
            cur.prev.next = cur.next;
        } else {
            head = cur.next;
        }

        if (cur.next != null) {
            cur.next.prev = cur.prev;
        } else {
            tail = cur.prev;
        }
    }

    void push(Node cur) {
        if (tail != null) {
            tail.next = cur;
        }

        cur.prev = tail;
        cur.next = null;
        tail = cur;

        if (head == null) {
            head = tail;
        }
    }
}
