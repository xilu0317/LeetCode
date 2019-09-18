import java.util.HashMap;
import java.util.Map;

class Node {
    int val;
    Node next;
    Node random;

    Node(int v, Node n, Node r) {
        val = v;
        next = n;
        random = r;
    }
}

// Same as clone-graph
// Something wrong with the leetcode OJ using JS
class Solution {
    public Node copyRandomList(Node head) {
        if (head == null) {
            return null;
        }

        Map<Node, Node> map = new HashMap<Node, Node>();

        // create imaged nodes
        Node node = head;
        while (node != null) {
            map.put(node, new Node(node.val, null, null));
            node = node.next;
        }

        // setup relationship between imaged nodes
        node = head;
        while (node != null) {
            map.get(node).next = map.get(node.next);
            map.get(node).random = map.get(node.random);
            node = node.next;
        }

        return map.get(head);
    }
}
