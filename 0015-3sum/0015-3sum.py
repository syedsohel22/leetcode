class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        nums.sort()
        if(len(nums)>=3) and (nums[0]==nums[len(nums)-1]) and (nums[0]==0):
            return [[0,0,0]]
        result = []
        for index in range(len(nums)-1):
            left  = index +1
            right = len(nums)-1

            while left<right:
                currsum = nums[index]+nums[left]+nums[right]
                if currsum ==0:
                    result.append([nums[index],nums[left],nums[right]])
                    left+=1
                    right-=1
                elif currsum<0:
                    left+=1
                else:
                    right-=1
    
        return [list(t) for t in set(tuple(element)for element in result)]