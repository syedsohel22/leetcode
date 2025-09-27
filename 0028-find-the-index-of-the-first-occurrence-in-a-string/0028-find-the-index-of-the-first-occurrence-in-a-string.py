class Solution:
    def strStr(self, haystack: str, needle: str) -> int:
        haystack_length = len(haystack)
        needle_length = len(needle)
      
        for start_index in range(haystack_length - needle_length + 1):
            if haystack[start_index:start_index + needle_length] == needle:
                return start_index
      
        return -1