/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let j=0;

    for(let i=0;i<nums.length-1;i++){
        if(nums[i]!==nums[i+1]){
            j++
            nums[j] = nums[i+1]
        }
    }

    return j+1
};