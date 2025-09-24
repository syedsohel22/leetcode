class Solution:
    def compareVersion(self, version1: str, version2: str) -> int:
        def conv(s):
            return [int(x) for x in s.split(".")]
        def pair(v,m):
            while len(v)<m:
                v.append(0)
            return v

        v1,v2 = conv(version1), conv(version2)
        m = max(len(v1),len(v2))
        v1,v2  = pair(v1,m), pair(v2,m)

        if v1 ==v2:
            return 0
        elif v1>v2:
            return 1
        return -1