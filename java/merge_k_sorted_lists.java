import java.util.Comparator;
import java.util.PriorityQueue;

public class ListNode {
    int val;
    ListNode next;

    ListNode(int x) {
        val = x;
    }
}

public class Solution {
    public ListNode mergeKLists(ListNode[] lists) {
        if (lists == null || lists.length == 0)
            return null;

        // Comp
        Comparator<ListNode> comp = (n1, n2) -> {
            if (n1.val < n2.val)
                return -1;
            else if (n1.val == n2.val)
                return 0;
            else
                return 1;
        };

        // key
        PriorityQueue<ListNode> q = new PriorityQueue<ListNode>(comp);

        ListNode dummy = new ListNode(0);
        ListNode cur = dummy;

        // qeueue up all heads
        for (ListNode head : lists)
            if (head != null)
                q.add(head);

        while (!q.isEmpty()) {
            // poll() is just ES6 q.shift()
            cur.next = q.poll();
            cur = cur.next;

            if (cur.next != null)
                q.add(cur.next);
        }

        // Always what is right next to the dummy node
        return dummy.next;
    }
}

// The java.util.PriorityQueue.poll() method in Java is used to retrieve or
// fetch and remove the first element of the Queue or the element present at the
// head of the Queue.

// The peek() method only retrieved the element at the head
// but the poll() also removes the element along with the retrieval.

// It returns NULL if the q is empty.
