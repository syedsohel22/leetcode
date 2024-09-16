/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const myMap =  new Map()

    for(let i=0;i<nums.length;i++){
        let value = target - nums[i]

        if(myMap.has(value)){
          return [myMap.get(value),i]
        }

        myMap.set(nums[i],i)
    }

    return []
};