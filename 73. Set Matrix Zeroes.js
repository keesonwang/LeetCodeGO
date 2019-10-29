/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let iscol = false;
    let row = matrix.length;
    let column = matrix[0].length;
    for (let i = 0; i<row ; i++){
        if(matrix[i][0]==0) iscol = true;
         for(let j=1; j<column; j++){
             if(matrix[i][j]===0){
                 matrix[0][j]=0;
                 matrix[i][0]=0;
             }
         }
    }
    for (let i = 1; i<row ; i++){
         for(let j=1; j<column; j++){
             if(matrix[i][0]==0||matrix[0][j]==0){
                 matrix[i][j]=0;
             }
         }
    }
     if(matrix[0][0]==0){
         for(let j = 0; j<column;j++){
             matrix[0][j] = 0;
         }
     }
    if(iscol){
        for (let i=0;i<row;i++){
            matrix[i][0]=0;
        }
    }
    
};
