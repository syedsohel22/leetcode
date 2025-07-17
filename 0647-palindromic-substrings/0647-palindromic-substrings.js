/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    let ans = 0
    for(let i=0;i<s.length;i++){
        ans+= checkPalindrome(s,i,i)
        ans+= checkPalindrome(s,i,i+1)
    }

    return ans

    function checkPalindrome(s,left,right){
        let count = 0
        while(left>=0 && right <s.length && s.charAt(left)===s.charAt(right)){
            left--;
            right++
            count++
        }

        return count
    }
};