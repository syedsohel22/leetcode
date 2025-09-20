# Write your MySQL query statement below
select Department.name as "Department" , e.name as "Employee", e.salary as "Salary" from
(select departmentId, name, salary, DENSE_RANK() over(PARTITION BY departmentId order by salary desc ) as r from Employee) e 
join Department on e.departmentId = Department.id
where r<=3