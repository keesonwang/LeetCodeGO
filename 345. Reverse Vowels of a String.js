/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let p1 = 0, p2 = s.length-1;
    let vow=["a","e","i","o","u"];
    s = s.split('');
    while(p1<p2){
        if(vow.includes(s[p1].toLowerCase())&&vow.includes(s[p2].toLowerCase())){
            [s[p1],s[p2]]=[s[p2],s[p1]];
            p1++;
            p2--;
        }
        if(!(vow.includes(s[p1].toLowerCase()))) p1++;
        if(!(vow.includes(s[p2].toLowerCase()))) p2--;
    }
    return s.join('');
};
