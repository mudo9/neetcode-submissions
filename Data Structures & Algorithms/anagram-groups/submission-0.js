class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    /*
    
    loop the array, on each iteration, add that string to a hashmap1
    if i + 1 !== undefined, let pointer = i+1,
    if (strs[i+1] .length === strs[i].length){
    loop  strs[i+1], add it to a hashmap2
    let j = 0;
    while j < strs[i+1].length {
    if hashmap1[]} }else i++;
    */
    groupAnagrams(strs) {
        let anagrams = {};
        for (let i = 0; i < strs.length; i++) {
            let sortedString = strs[i].split('').sort().join('');
            if (sortedString in anagrams) {
                anagrams[sortedString].push(strs[i]);
            } else {
                anagrams[sortedString] = [strs[i]];
            }
            
        }
        return Object.values(anagrams);
    }
}
