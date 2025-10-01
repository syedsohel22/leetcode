class Solution:
    def mySqrt(self, x: int) -> int:
        ans =0
        l,r = 0,x

        while l <= r:
            m = l + ((r-l) // 2)
            if m**2>x:
                r = m-1
            elif m**2 < x:
                l=m+1
                ans = m
            else:
                return m
        return ans