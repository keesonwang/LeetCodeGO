/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let i=0,j=0,res=new Set(),n=0;
    while(i<s.length&&j<s.length){
        if(!(res.has(s[j]))){
            res.add(s[j]);
            n = Math.max(n,res.size);
            j++;
        }else{
            res.delete(s[i]);
            i++;
        }
        
    }
    return n;
};




var lengthOfLongestSubstring = function(s) {
    let n = s.length, ans = 0;
    let index = new Array(26);
    for(let j=0,i=0;j<n;j++) {
        if(index[s.charAt(j)]){
            i = Math.max(index[s.charAt(j)], i);
        }
        ans = Math.max(ans, j-i+1);
        index[s.charAt(j)] = j+1;
    }
    return ans;
}
