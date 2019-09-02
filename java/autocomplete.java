class AutocompleteSystem {
    // Memeber variable of the outer class
    TrieNode root;
    String prefix;

    public AutocompleteSystem(String[] sentences, int[] times) {
        root = new TrieNode();
        prefix = "";
        for (int i = 0; i < sentences.length; i++) {
            add(sentences[i], times[i]);
        }
    }

    private void add(String word, int count) {
        TrieNode cur = root;
        for (char ch: word.toCharArray()) {
            TrieNode next = cur.children.get(ch);
            if (next == null) {
                next = new TrieNode();
                cur.children.put(ch, next);
            }
            cur = next;
            cur.counts.put(word, cur.counts.getOrDefault(word, 0) + count);
        }
        cur.isWord = true;
    }

    public List<String> input(char c) {
        if (c == '#') {
            add(prefix, 1);
            prefix = "";
            return new ArrayList<>();
        }

        prefix += c;
        TrieNode cur = root;
        for (char ch: prefix.toCharArray()) {
            TrieNode next = cur.children.get(ch);
            if (next == null) return new ArrayList<>();
            else cur = next;
        }

        PriorityQueue<Node> queue = new PriorityQueue<>((a, b)->(a.count == b.count ? a.word.compareTo(b.word) : b.count - a.count));
        for (Map.Entry<String, Integer> entry: cur.counts.entrySet()) {
            queue.offer(new Node(entry.getKey(), entry.getValue()));
        }

        List<String> res = new ArrayList<>();
        for (int i = 0; i < 3 && !queue.isEmpty(); i++) {
            res.add(queue.poll().word);
        }
        return res;
    }
}

class TrieNode {
    Map<Character, TrieNode> children;
    Map<String, Integer> counts;
    boolean isWord;

    public TrieNode() {
        children = new HashMap<>();
        counts = new HashMap<>();
        isWord = false;
    }
}

class Node {
    String word;
    int count;

    public Node(String s, int c) {
        this.word = s;
        this.count = c;
    }
}