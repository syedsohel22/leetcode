/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    if(nums.length===0){
        return 0;
    }

    let min = nums[0]
    let max = nums[0]
    let res = max
    for(let i=1;i<nums.length;i++){
        let curr = nums[i]
        let temp = Math.max(curr,Math.max(max*curr,min*curr))
        min = Math.min(curr, Math.min(min*curr,max*curr))
        max = temp

        res = Math.max(res, max)
    }

    return res
};