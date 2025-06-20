/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let left = 0 
    let right =  numbers.length-1
    for(let i=0;i<numbers.length;i++){
        if(numbers[left]+numbers[right] < target){
            left++
        }else if(numbers[left]+numbers[right]>target){
            right--
        }else{
            return [left+1,right+1]
        }
    }
};