/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let ans = [];
    if(matrix.length == 0){
        return ans;
    }
    let startx = 0,
    starty = 0,
    direction = 0,
    topborder = -1,
    rightborder = matrix[0].length,
    bottomborder = matrix.length,
    leftborder = -1;
    while(true){
        if (ans.length==matrix.length * matrix[0].length){
            return ans;
        }
        ans.push(matrix[starty][startx]);
        switch(direction){
            case 0:
                if(startx + 1 == rightborder){
                    direction = 1;
                    starty += 1;
                    topborder += 1;
                }else{
                    startx +=1;
                }
                break;
            case 1:
                if (starty + 1 == bottomborder) {
                    direction = 2;
                    startx -= 1;
                    rightborder -= 1;
                } else {
                    starty += 1;
                }
                break;
            case 2:
                if (startx - 1 == leftborder) {
                    direction = 3;
                    starty -= 1;
                    bottomborder -= 1;
                } else {
                    startx -= 1;
                }
                break;
            case 3:
                if (starty - 1 == topborder) {
                    direction = 0;
                    startx += 1;
                    leftborder += 1;
                } else {
                    starty -= 1;
                }
                break;
        }
    }
    
};
