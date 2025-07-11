/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let curSum = 0
    let maxSum = nums[0]

    for(let i=0;i<nums.length;i++){
        if(curSum<0){
            curSum = 0
        }
       curSum = curSum + nums[i]
       maxSum =  Math.max(curSum, maxSum)
    }

    return maxSum
};