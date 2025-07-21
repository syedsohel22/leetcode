/**
 * @param {string} s
 * @return {string}
 */
var makeFancyString = function(s) {
   let ans = [];
    for (let i = 0; i < s.length; i++) {
        ans.push(s[i]);
        let n = ans.length;
        if (n >= 3 && ans[n - 1] === ans[n - 2] && ans[n - 2] === ans[n - 3]) {
            ans.pop();
        }
    }
    return ans.join("");
};