# Write your MySQL query statement below
SELECT
(SELECT DISTINCT Salary 
FROM Employee
ORDER BY Salary DESC
LIMIT 1 OFFSET 1)
AS SecondHighestSalary

-- HINT: subquery is used to return null if there is no SecondHighestSalary