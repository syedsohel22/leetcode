/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
   for(let i=0;i<= haystack.length - needle.length;i++){

    if(haystack.substring(i,i+needle.length) === needle){
        return i
    }
   }

 if(haystack === needle){
    return 0
 }

    return -1
};