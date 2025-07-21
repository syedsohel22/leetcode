class Solution:
    def makeFancyString(self, s: str) -> str:
        ans = []
        for c in s:
            ans.append(c)
            if len(ans) >=3 and ans[-3] == ans [-2] == ans[-1]:
                ans.pop()
        return "".join(ans) 