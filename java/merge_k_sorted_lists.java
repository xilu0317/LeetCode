import java.util.Comparator;
import java.util.PriorityQueue;
import java.util.Queue;

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

        // lambda expression
        Comparator<ListNode> comp = (n1, n2) -> {
            if (n1.val < n2.val)
                return -1;
            else if (n1.val == n2.val)
                return 0;
            else
                return 1;
        };

        // KEY
        Queue<ListNode> q = new PriorityQueue<ListNode>(comp);

        ListNode dummy = new ListNode(0);
        ListNode cur = dummy;

        // push all heads of the lists onto the 'q'
        for (ListNode head : lists)
            if (head != null) {
                // ES6 q.push()
                q.add(head);
            }

        while (!q.isEmpty()) {
            // ES6 q.shift()
            cur.next = q.poll();
            cur = cur.next;

            if (cur.next != null) {
                // ES6 q.push()
                q.add(cur.next);
            }
        }

        return dummy.next;
    }
}

// The java.util.PriorityQueue.poll() method in Java is used to retrieve or
// fetch and remove the first element of the Queue or the element present at the
// head of the Queue.

// The peek() method only retrieved the element at the head
// but the poll() also removes the element along with the retrieval.

// It returns NULL if the q is empty.
