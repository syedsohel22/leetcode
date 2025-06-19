/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let left = 0 
    let right = nums.length-1
    let ans = nums[0]
    if(nums.length ===1){
        return nums[0]
    } 
    while(left<=right){
        if(nums[left]<nums[right]){
            ans = Math.min(ans,nums[left])
        }

        let mid = Math.floor((left+right)/2)
        ans = Math.min(ans,nums[mid])

        if(nums[left]<=nums[mid]){
            left=mid+1
        }else{
            right = mid-1   
        }
    }

    return ans
};