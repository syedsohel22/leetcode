/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {

    let res  = [];
    let pre = 1
    let post = 1
    for(let i=0;i<nums.length;i++){
        res[i] = pre
        pre = nums[i]*pre;
    }

    for(let j=nums.length-1;j>=0;j--){
        res[j] = res[j]*post
        post=post*nums[j];
    }

    return res;
    
};