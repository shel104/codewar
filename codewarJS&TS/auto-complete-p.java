class Solution {
  public int solution(String[] words) {
      int answer = 0;
      Trie trie = new Trie();
      trie.num = -1;
      for(int i = 0; i < words.length; i++) {
          trie.insert(words[i]);
      }
      for(int i = 0; i < words.length; i++) {
          answer += trie.query(words[i]);
      }
      return answer;
  }
}
class Trie {
    int num = 0;
    Trie[] sub = new Trie[26];

    void insert(String key) {
            int index = 0;
            Trie trie;
            if(this.sub[toNumber(key.charAt(index))] == null) {
                trie = this.sub[toNumber(key.charAt(index))] = new Trie();
            }else {
                trie = this.sub[toNumber(key.charAt(index))];
                trie.num = 1;
            }
            index++;
            while(index < key.length()) {
                int next = toNumber(key.charAt(index));
                if(trie.sub[next] == null) {
                    trie.sub[next] = new Trie();
                }else {
                    trie.sub[next].num = 1;
                }
                trie = trie.sub[next];
                index++;
            }
    }
    int query(String key) {
           int i = 1, index = 0;
            Trie trie = this.sub[toNumber(key.charAt(index))];
            index++;
            while(index < key.length()) {
                int next = toNumber(key.charAt(index));
                if(trie.num == 0) {
                    break;
                }
                i++;
                trie = trie.sub[next]; 
                index++;
            }
            return i;
    }
    int toNumber(char t) {
        return t - 'a';
    }
}
