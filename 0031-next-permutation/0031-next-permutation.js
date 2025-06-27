/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    function swap(nums,i,j){
        let temp =nums[i]
        nums[i]= nums[j]
        nums[j]=temp
    }

    function reverse(nums,i){
        let j=nums.length-1;
        while(i<j){
            swap(nums,j,i)
            i++
            j--
        }
    }

    let i=nums.length-2;
    while(i>=0 && nums[i+1]<=nums[i]){
        i--;
    }
    if(i>=0){
let j=nums.length-1;
while(nums[j]<=nums[i]){
    j--
}
swap(nums,j,i)
    }
    reverse(nums,i+1)

};