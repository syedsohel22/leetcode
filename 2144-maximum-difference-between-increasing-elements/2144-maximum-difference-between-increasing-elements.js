/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function(nums) {
    let max_diff = 0
    let min = nums[0]

    for(let i=0;i<nums.length;i++){
        if(nums[i]<min){
            min = nums[i]
        }

        max_diff = Math.max(max_diff,nums[i]-min)
    }
    return max_diff || -1
};