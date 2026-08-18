class Solution4 {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const groups = new Map<string, string[]>();
        // here is the map where the key is a string -> array

        for(const str of strs){
        //now we need to create a pattern for the strings
        //gotta order it
            const key = str.split("").sort().join("");
            const group = groups.get(key);

            if (group === undefined){
                groups.set(key, [str])
            }
            else{
                group.push(str)
            }
        }
        
        
        return Array.from(groups.values());
    }
}
