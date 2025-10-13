class Solution:
    def isHappy(self, n: int) -> bool:
        visited_num = set()
      
        while n != 1 and n not in visited_num:
            visited_num.add(n)
            sum_of_squares = 0
            while n > 0:
                n, digit = divmod(n, 10)
                sum_of_squares += digit * digit
            n = sum_of_squares
        return n == 1