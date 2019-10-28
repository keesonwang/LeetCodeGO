/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var transpose = function(A) {
    const newrow=A.length;
    const newcolumn=A[0].length;
    let result=[];
    for(let i =0; i<newcolumn;i++){
        const elem = [];
        for (let j = 0; j<newrow ; j++){
            elem.push(A[j][i]);
        }
        result.push(elem);
    }
    return result;
};
