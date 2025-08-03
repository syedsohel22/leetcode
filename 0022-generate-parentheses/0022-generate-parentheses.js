/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let res = [];
    
     backTrack(0,0,n,res,"")

     return res
};


function backTrack(openN, closeN, n, res, stack){
    if(openN ===closeN && openN===n){
        res.push(stack)
        return 
    }

    if(openN<n){
        backTrack(openN+1, closeN, n, res, stack+"(")
    }


    if(closeN < openN){
        backTrack(openN,closeN+1,n,res, stack+")")
    }
}