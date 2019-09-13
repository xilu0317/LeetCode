import java.util.HashMap;
import java.util.Map;

class Node {
    int key;
    int value;
    Node prev;
    Node next;

    public Node(int key, int value) {
        this.key = key;
        this.value = value;
    }
}

// TODO: revisit
class LRUCache {
    Node head;
    Node tail;
    Map<Integer, Node> map;
    int cap = 0;

    public LRUCache(int capacity) {
        this.cap = capacity;
        this.map = new HashMap<>();
    }

    public int get(int key) {
        if (map.get(key) == null) {
            return -1;
        }

        Node t = map.get(key);

        removeNode(t);
        addNode(t);

        return t.value;
    }

    public void put(int key, int value) {
        if (map.containsKey(key)) {
            Node t = map.get(key);
            t.value = value;

            removeNode(t);
            addNode(t);
        } else {
            if (map.size() >= cap) {
                // delete head
                map.remove(head.key);
                removeNode(head);
            }

            Node node = new Node(key, value);
            addNode(node);

            map.put(key, node);
        }
    }

    private void removeNode(Node n) {
        if (n.prev != null) {
            n.prev.next = n.next;
        } else {
            head = n.next;
        }

        if (n.next != null) {
            n.next.prev = n.prev;
        } else {
            tail = n.prev;
        }
    }

    private void addNode(Node n) {
        if (tail != null) {
            tail.next = n;
        }

        n.prev = tail;
        n.next = null;
        tail = n;

        if (head == null) {
            head = tail;
        }
    }
}
