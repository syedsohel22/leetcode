/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  
  
     let longest = 0

    let numset = new Set()
    for(let i=0;i<nums.length;i++){
        numset.add(nums[i])
    }

    for(let i=0;i<nums.length;i++){
        if(numset.has(nums[i])&& !numset.has(nums[i]-1) ){
            let value = nums[i] 
            let count = 0
            while(numset.has(value)){
                numset.delete(value)
                value++
                count++
            }

            longest= Math.max(longest,count)
        }
    }
    return longest
};