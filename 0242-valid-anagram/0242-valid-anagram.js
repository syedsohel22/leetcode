/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length!==t.length){
    return false
    }

    let obj = {}
    for(let i=0;i<s.length;i++){
        if(obj[s[i]]===undefined){
            obj[s[i]] =1
        }else{
            obj[s[i]]++
        }
    }

    for(char of t){
        if(!obj[char]){
            return false
        }else{
            obj[char]--
        }
    }

    return true
};