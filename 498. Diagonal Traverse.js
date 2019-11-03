/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var findDiagonalOrder = function(matrix) {
    if (matrix.length<1 || matrix[0].length<1){
        return [];
    }
    let i = 0, j = 0, n = matrix.length, m = matrix[0].length;
    let res = [];
    for (let k = 0; k < n*m;k++){
        res.push(matrix[i][j]);
        if((i+j)%2 == 0){
            if(j == m-1){
                i++;
            }else if(i==0){
                j++;
            }else{
                i--;
                j++;
            }
        }else {
            if(i==n-1){
                j++;
            }else if(j==0){
                i++;
            }else{
                i++;
                j--;
            }
        }
    }
    return res;
};
