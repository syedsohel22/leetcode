/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let maxLen = 1;
    let start = 0;



    for (let i = 0; i < s.length; i++) {
        for (let j = i; j < s.length; j++) {
            if (checkPal(s, i, j) && (j - i + 1) > maxLen) {
                start = i;
                maxLen = j - i + 1;
            }
        }
    }

    return s.substring(start, start + maxLen);  
};

function checkPal(s, low, high) {
    while (low < high) {
        if (s[low] !== s[high])
            return false;
        low++;
        high--;
    }
    return true;
}