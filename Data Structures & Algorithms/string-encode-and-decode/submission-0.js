class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
       let result = "";
       for (let word of strs) {
        result += word.length + "#" + word;
        //console.log(result);
       }
       return result;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        console.log(str);
        let result = [];
        let i = 0;
        while (i < str.length) {
            let j = i;
            while (str[j] !== "#") j++;
            let length = Number(str.slice(i,j));
            let word = str.slice(j + 1, j + 1 + length);
            i = j + 1 + length;
            result.push(word);
        }
        return result;
    }
}
