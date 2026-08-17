class Solution02 {
    isAnagram(s: string, t: string): boolean {

        if(s.length !== t.length){
            return false
        }

        const frequency = new Map<string, number>();
        for (const char of s){
            const current = frequency.get(char) ?? 0;
            frequency.set(char, current + 1);
        }
        for (const char of t) {
            const current = frequency.get(char) ?? 0;

            if (current === 0) {
            return false;
            }
            frequency.set(char, current - 1);
      }

      return true
    }
}
