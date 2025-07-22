/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function(nums) {
   let flag =0
    for(let i=0;i<nums.length;i++){
        if(nums[i]>nums[(i+1) %nums.length]){
            flag++
        }
    }

    return flag<=1
};