/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    let strNums = nums.map((el) => String(el));

    strNums.sort((a, b) => {
        return (b + a) - (a + b);
    });

    if (strNums[0] === "0") {
        return "0";
    }

    return strNums.join("");
};