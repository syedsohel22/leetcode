/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let ans = 0

    for(let i=0;i<nums.length;i++){
        if(nums[i]!=val){
          nums[ans] = nums[i]
          ans+=1
        }
    }

    return ans
};