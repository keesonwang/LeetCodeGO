/**
 * @param {string} s
 * @param {string[]} d
 * @return {string}
 */
var findLongestWord = function(s, d) {
    d.sort((a,b)=>{
        if (a.length!==b.length){
            return b.length-a.length;
        }
        return a.localeCompare(b);
    })
    for (let word of d) {
      let index = -1;
      for (let c of word) {
        index = s.indexOf(c, index + 1);
        if (index < 0) break;
    }
    if (index >= 0) return word;
  }

  return '';
};


