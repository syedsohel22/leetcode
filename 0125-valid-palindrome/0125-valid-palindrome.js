/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    if(s===''){
        return true
    }
    let filteredStr = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let reversedStr = filteredStr.split('').reverse().join('');

    return filteredStr===reversedStr
};