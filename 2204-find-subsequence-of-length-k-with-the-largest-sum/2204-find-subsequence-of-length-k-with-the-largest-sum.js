/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSubsequence = function(nums, k) {
   let numSize = nums.length;

    let indexedNums = [];

    for (let i = 0; i < numSize; ++i) {
        indexedNums.push({ index: i, value: nums[i] });
    }


    indexedNums.sort((a, b) => b.value - a.value);

    let firstKElements= indexedNums.slice(0, k);
    firstKElements.sort((a, b) => a.index - b.index);

 
    let answer = firstKElements.map(element => element.value);

    return answer;   
};