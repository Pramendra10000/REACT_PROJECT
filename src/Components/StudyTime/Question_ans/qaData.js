export const data = {
  "JAVA-CODING-ARRAY-VECTOR": [
    {
      q: "Write Program for Reversing an array",
      a: `<p><strong>Solution:</strong> Swap elements from ends moving toward center. Works in-place with O(1) extra space.</p>
<pre><code>
import java.util.Scanner;
import java.util.Arrays;

public class ReverseArray {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter number of elements: ");
        int n = sc.nextInt();
        int[] a = new int[n];
        System.out.println("Enter elements:");
        for (int i = 0; i < n; i++) a[i] = sc.nextInt();

        // Reverse in-place
        int i = 0, j = n - 1;
        while (i < j) {
            int tmp = a[i];
            a[i] = a[j];
            a[j] = tmp;
            i++; j--;
        }

        System.out.println("Reversed array: " + Arrays.toString(a));
    }
}
</code></pre>
<hr>
<p><strong>Sample Output:</strong><br>
Enter number of elements: 5<br>
Enter elements:<br>
1 2 3 4 5<br>
Reversed array: [5, 4, 3, 2, 1]</p>`
    },
    {
      q: "Write Program to find maximum product subarray in a given array",
      a: `<p><strong>Solution:</strong> Track maximum and minimum products ending at current index (because negative numbers flip sign). Update global maximum accordingly. O(n) time.</p>
<pre><code>
import java.util.Scanner;

public class MaxProductSubarray {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter number of elements: ");
        int n = sc.nextInt();
        int[] a = new int[n];
        System.out.println("Enter elements:");
        for (int i = 0; i < n; i++) a[i] = sc.nextInt();

        if (n == 0) {
            System.out.println("Max product: 0");
            return;
        }

        long maxProd = a[0];
        long minProd = a[0];
        long result = a[0];

        for (int i = 1; i < n; i++) {
            long val = a[i];
            if (val < 0) {
                long tmp = maxProd;
                maxProd = minProd;
                minProd = tmp;
            }
            maxProd = Math.max(val, maxProd * val);
            minProd = Math.min(val, minProd * val);
            result = Math.max(result, maxProd);
        }

        System.out.println("Maximum product subarray: " + result);
    }
}
</code></pre>
<hr>
<p><strong>Sample Output:</strong><br>
Enter number of elements: 6<br>
Enter elements:<br>
-2 0 -1 -3 4 -1<br>
Maximum product subarray: 12</p>`
    },
    {
      q: "Write Program to find whether Arrays are disjoint or not",
      a: `<p><strong>Solution:</strong> Two arrays are disjoint if they share no common element. Use a HashSet for one array and check elements of the other. O(n+m) time.</p>
<pre><code>
import java.util.HashSet;
import java.util.Scanner;

public class DisjointArrays {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter size of first array: ");
        int n = sc.nextInt();
        int[] a = new int[n];
        System.out.println("Enter elements of first array:");
        for (int i = 0; i < n; i++) a[i] = sc.nextInt();

        System.out.print("Enter size of second array: ");
        int m = sc.nextInt();
        int[] b = new int[m];
        System.out.println("Enter elements of second array:");
        for (int i = 0; i < m; i++) b[i] = sc.nextInt();

        HashSet<Integer> set = new HashSet<>();
        for (int v : a) set.add(v);

        boolean disjoint = true;
        for (int v : b) {
            if (set.contains(v)) {
                disjoint = false;
                break;
            }
        }

        if (disjoint) System.out.println("Arrays are disjoint");
        else System.out.println("Arrays are not disjoint");
    }
}
</code></pre>
<hr>
<p><strong>Sample Output:</strong><br>
Enter size of first array: 4<br>
Enter elements of first array:<br>
1 2 3 4<br>
Enter size of second array: 3<br>
Enter elements of second array:<br>
5 6 7<br>
Arrays are disjoint</p>`
    },
    {
      q: "Write Program to find whether an array is a subset of another array or not",
      a: `<p><strong>Solution:</strong> Check that every element of candidate subset appears in the superset. Use a HashMap or HashSet for counts if duplicates matter. Here we treat subset with multiplicity: each occurrence must be present.</p>
<pre><code>
import java.util.HashMap;
import java.util.Scanner;

public class ArraySubsetCheck {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter size of superset array: ");
        int n = sc.nextInt();
        int[] sup = new int[n];
        System.out.println("Enter elements of superset:");
        for (int i = 0; i < n; i++) sup[i] = sc.nextInt();

        System.out.print("Enter size of subset candidate array: ");
        int m = sc.nextInt();
        int[] sub = new int[m];
        System.out.println("Enter elements of candidate:");
        for (int i = 0; i < m; i++) sub[i] = sc.nextInt();

        HashMap<Integer, Integer> freq = new HashMap<>();
        for (int v : sup) freq.put(v, freq.getOrDefault(v, 0) + 1);

        boolean isSubset = true;
        for (int v : sub) {
            int count = freq.getOrDefault(v, 0);
            if (count == 0) {
                isSubset = false;
                break;
            }
            freq.put(v, count - 1);
        }

        if (isSubset) System.out.println("Second array is a subset of first");
        else System.out.println("Second array is NOT a subset of first");
    }
}
</code></pre>
<hr>
<p><strong>Sample Output:</strong><br>
Enter size of superset array: 6<br>
Enter elements of superset:<br>
1 2 3 4 2 5<br>
Enter size of subset candidate array: 3<br>
Enter elements of candidate:<br>
2 5 2<br>
Second array is a subset of first</p>`
    },
    {
      q: "Write Program to find maximum scalar product of two vectors",
      a: `<p><strong>Solution:</strong> To maximize dot product, sort both vectors in the same order (both ascending) and multiply pairwise. O(n log n) due to sorting.</p>
<pre><code>
import java.util.Arrays;
import java.util.Scanner;

public class MaxScalarProduct {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter size of vectors: ");
        int n = sc.nextInt();

        long[] a = new long[n];
        long[] b = new long[n];
        System.out.println("Enter elements of first vector:");
        for (int i = 0; i < n; i++) a[i] = sc.nextLong();
        System.out.println("Enter elements of second vector:");
        for (int i = 0; i < n; i++) b[i] = sc.nextLong();

        Arrays.sort(a);
        Arrays.sort(b);

        long maxDot = 0;
        for (int i = 0; i < n; i++) maxDot += a[i] * b[i];

        System.out.println("Maximum scalar product: " + maxDot);
    }
}
</code></pre>
<hr>
<p><strong>Sample Output:</strong><br>
Enter size of vectors: 3<br>
Enter elements of first vector:<br>
1 3 -5<br>
Enter elements of second vector:<br>
-2 4 1<br>
Maximum scalar product: 23</p>`
    },
    {
      q: "Write Program to find whether the numbers of an array be made equal (minimum moves to make all equal by increment/decrement by 1)",
      a: `<p><strong>Solution:</strong> The minimal number of unit increments/decrements to make all elements equal is achieved by making every element equal to the median. Compute median and sum absolute differences.</p>
<pre><code>
import java.util.Arrays;
import java.util.Scanner;

public class MakeArrayEqual {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter number of elements: ");
        int n = sc.nextInt();
        int[] a = new int[n];
        System.out.println("Enter elements:");
        for (int i = 0; i < n; i++) a[i] = sc.nextInt();

        Arrays.sort(a);
        int median = a[n / 2]; // for even n this picks upper median; any median works
        long moves = 0;
        for (int v : a) moves += Math.abs(v - median);

        System.out.println("Make all elements equal to " + median + " with minimum moves: " + moves);
    }
}
</code></pre>
<hr>
<p><strong>Sample Output:</strong><br>
Enter number of elements: 5<br>
Enter elements:<br>
1 2 3 4 5<br>
Make all elements equal to 3 with minimum moves: 6</p>`
    },
    {
      q: "Write Program to find symmetric pairs in an array",
      a: `<p><strong>Solution:</strong> Given an array of ordered pairs (x,y), a symmetric pair exists if (y,x) also appears. Use a HashMap to map first->second and check for reverse pairs.</p>
<pre><code>
import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class SymmetricPairs {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter number of pairs: ");
        int n = sc.nextInt();
        int[][] pairs = new int[n][2];
        System.out.println("Enter pairs (a b) one per line:");
        for (int i = 0; i < n; i++) {
            pairs[i][0] = sc.nextInt();
            pairs[i][1] = sc.nextInt();
        }

        Map<Integer, Integer> map = new HashMap<>();
        System.out.println("Symmetric pairs found:");
        boolean any = false;
        for (int[] p : pairs) {
            int x = p[0], y = p[1];
            if (map.containsKey(y) && map.get(y) == x) {
                System.out.println("(" + x + ", " + y + ") and (" + y + ", " + x + ")");
                any = true;
            } else {
                map.put(x, y);
            }
        }
        if (!any) System.out.println("None");
    }
}
</code></pre>
<hr>
<p><strong>Sample Output:</strong><br>
Enter number of pairs: 4<br>
Enter pairs (a b) one per line:<br>
1 2<br>
3 4<br>
2 1<br>
5 6<br>
Symmetric pairs found:<br>
(2, 1) and (1, 2)</p>`
    },
    {
      q: "Write Program to count distinct elements of an array",
      a: `<p><strong>Solution:</strong> Use a HashSet to collect unique elements and return its size. O(n) time.</p>
<pre><code>
import java.util.HashSet;
import java.util.Scanner;

public class CountDistinct {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter number of elements: ");
        int n = sc.nextInt();
        System.out.println("Enter elements:");
        HashSet<Integer> set = new HashSet<>();
        for (int i = 0; i < n; i++) set.add(sc.nextInt());

        System.out.println("Number of distinct elements: " + set.size());
    }
}
</code></pre>
<hr>
<p><strong>Sample Output:</strong><br>
Enter number of elements: 8<br>
Enter elements:<br>
2 3 2 4 5 3 2 4<br>
Number of distinct elements: 4</p>`
    },
    {
      q: "Write Program to find non-repeating elements of an array",
      a: `<p><strong>Solution:</strong> Use a LinkedHashMap to count frequencies while preserving order, then print elements with frequency 1.</p>
<pre><code>
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.Scanner;

public class NonRepeatingElements {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter number of elements: ");
        int n = sc.nextInt();
        int[] a = new int[n];
        System.out.println("Enter elements:");
        for (int i = 0; i < n; i++) a[i] = sc.nextInt();

        Map<Integer, Integer> freq = new LinkedHashMap<>();
        for (int v : a) freq.put(v, freq.getOrDefault(v, 0) + 1);

        System.out.print("Non-repeating elements: ");
        boolean found = false;
        for (Map.Entry<Integer, Integer> e : freq.entrySet()) {
            if (e.getValue() == 1) {
                System.out.print(e.getKey() + " ");
                found = true;
            }
        }
        if (!found) System.out.print("None");
        System.out.println();
    }
}
</code></pre>
<hr>
<p><strong>Sample Output:</strong><br>
Enter number of elements: 7<br>
Enter elements:<br>
1 2 2 3 4 3 5<br>
Non-repeating elements: 1 4 5</p>`
    },
    {
      q: "Write Program to find repeating elements in an array",
      a: `<p><strong>Solution:</strong> Use a HashMap to count frequencies and then collect elements with frequency &gt; 1. Use LinkedHashSet to preserve first-seen order of repeats.</p>
<pre><code>
import java.util.HashMap;
import java.util.LinkedHashSet;
import java.util.Map;
import java.util.Scanner;
import java.util.Set;

public class RepeatingElements {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter number of elements: ");
        int n = sc.nextInt();
        int[] a = new int[n];
        System.out.println("Enter elements:");
        for (int i = 0; i < n; i++) a[i] = sc.nextInt();

        Map<Integer, Integer> freq = new HashMap<>();
        for (int v : a) freq.put(v, freq.getOrDefault(v, 0) + 1);

        Set<Integer> repeats = new LinkedHashSet<>();
        for (int v : a) {
            if (freq.get(v) > 1) repeats.add(v);
        }

        System.out.print("Repeating elements: ");
        if (repeats.isEmpty()) System.out.print("None");
        else {
            for (int v : repeats) System.out.print(v + " ");
        }
        System.out.println();
    }
}
</code></pre>
<hr>
<p><strong>Sample Output:</strong><br>
Enter number of elements: 8<br>
Enter elements:<br>
2 3 2 4 5 3 2 4<br>
Repeating elements: 2 3 4</p>`
    }
  ]
}
