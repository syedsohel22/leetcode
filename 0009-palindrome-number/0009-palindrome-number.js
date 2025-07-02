/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    
    let val = x.toString()
    let left  = 0
    let right = val.length-1

    while(left<right){
        if(val[left]!==val[right]){
            return false
        }
        left++
        right--
    }

    return true
};