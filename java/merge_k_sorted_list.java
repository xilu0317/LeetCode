// The java.util.PriorityQueue.poll() method in Java is used to retrieve or 
// fetch and remove the first element of the Queue or the element present at the head of the Queue. 
// The peek() method only retrieved the element at the head 
// but the poll() also removes the element along with the retrieval. 
// It returns NULL if the q is empty.

public class Solution {
    public ListNode mergeKLists(ListNode[] lists) {
        final int LEN = lists.length;
        if (lists == null || LEN == 0)
            return null;

        PriorityQueue<ListNode> q = new PriorityQueue<ListNode>(LEN, new Comparator<ListNode>() {
            @Override
            public int compare(ListNode n1, ListNode n2) {
                if (n1.val < n2.val)
                    return -1;
                else if (n1.val == n2.val)
                    return 0;
                else
                    return 1;
            }
        });

        ListNode dummy = new ListNode(0);
        ListNode tail = dummy;

        for (ListNode node : lists)
            if (node != null)
                q.add(node);

        while (!q.isEmpty()) {

            tail.next = q.poll();
            tail = tail.next;

            if (tail.next != null)
                q.add(tail.next);
        }
        return dummy.next;
    }
}