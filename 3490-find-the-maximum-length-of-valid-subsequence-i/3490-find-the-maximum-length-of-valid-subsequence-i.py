class Solution:
    def maximumLength(self, nums: List[int]) -> int:
        n = len(nums)
        odd_count = 1 if nums[0] % 2 == 1 else 0
        even_count = 1 if nums[0] % 2 == 0 else 0
        alternate_count = 1
        expecting_even = True if nums[0] % 2 == 1 else False
        
        for i in range(1, n):
            if (expecting_even == True and nums[i] % 2 == 0) or (expecting_even == False and nums[i] % 2 == 1):
                alternate_count += 1
                expecting_even = not expecting_even
            
            if nums[i] % 2 == 1:
                odd_count += 1
            else:
                even_count += 1
        return max(even_count, odd_count, alternate_count)