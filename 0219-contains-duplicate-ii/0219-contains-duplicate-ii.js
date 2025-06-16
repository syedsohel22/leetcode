/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let box = new Set()
    for(let i=0;i<nums.length;i++){
        if(box.has(nums[i])) return true
        box.add(nums[i])
        if(box.size>k){
        box.delete(nums[i-k])
        }
    }

    return false
};