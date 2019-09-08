import java.util.Arrays;
import java.util.Comparator;
import java.util.PriorityQueue;

// Design an array container is the key to solving this problem
class ArrayContainer implements Comparator<ArrayContainer> {
    int[] arr;
    int index;

    public ArrayContainer(int[] arr, int index) {
        this.arr = arr;
        this.index = index;
    }
}

public class KSortedArray {
    public static int[] mergeKSortedArray(int[][] arr) {
        // specify how comparison of the container is to be made
        Comparator<ArrayContainer> comp = (ac1, ac2) -> {
            // compare items of an array with current index
            if (ac1.arr[ac1.index] < ac2.arr[ac2.index])
                return -1;
            else if (ac1.arr[ac1.index] == ac2.arr[ac2.index])
                return 0;
            else
                return 1;
        };

        // Key to solve this problme is to use a PQ
        PriorityQueue<ArrayContainer> q = new PriorityQueue<ArrayContainer>(comp);

        // Add array to priority queue
        int len = 0;
        for (int i = 0; i < arr.length; i++) {
            // Note all array containers will have starting index of 0
            q.add(new ArrayContainer(arr[i], 0));
            len += arr[i].length;
        }

        int m = 0;
        int result[] = new int[len];

        // while heap is not empty
        while (!q.isEmpty()) {
            ArrayContainer ac = q.poll();
            result[m++] = ac.arr[ac.index];

            if (ac.index < ac.arr.length - 1) {
                // keep queueing the array container with different index into the pq
                q.add(new ArrayContainer(ac.arr, ac.index + 1));
            }
        }

        return result;
    }

    // Test code here:
    public static void main(String[] args) {
        int[] arr1 = { 1, 3, 5, 7 };
        int[] arr2 = { 2, 4, 6, 8 };
        int[] arr3 = { 0, 9, 10, 11 };

        int[] result = mergeKSortedArray(new int[][] { arr1, arr2, arr3 });
        System.out.println(Arrays.toString(result));
    }
}
