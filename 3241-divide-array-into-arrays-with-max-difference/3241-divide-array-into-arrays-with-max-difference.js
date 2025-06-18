/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[][]}
 */
var divideArray = function(nums, k) {
    nums.sort((a,b)=>a-b)
    let res = []
    for(let j=2;j < nums.length;j+=3){
        if(nums[j] - nums[j-2]>k){
            return []
        }

        res.push([nums[j-2],nums[j-1],nums[j]])
    }

    return res
};