/**
 * @param {number[]} nums
 * @return {number}
 */
var countHillValley = function(nums) {
    let prev = nums[0]
    let count = 0
    for(let i=1;i<nums.length-1;i++){
        let curr = nums[i]
        let next = nums[i+1]

        if(curr == next){
            continue;
        }

        if((curr <prev && curr <next) || ( curr> prev && curr > next)){
            count++
        }

        prev = curr
    }

    return count
};