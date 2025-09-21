class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        mapping = {}

        for index, val in enumerate(nums):
            diff = target - val
            if diff in mapping:
                return [index, mapping[diff]]
            else:
                mapping[val] = index