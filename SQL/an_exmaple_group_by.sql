-- https://www.w3schools.com/sql/trysql.asp?filename=trysql_select_groupby_orderby

SELECT COUNT(CustomerID) 'Total Users', Country
FROM Customers
GROUP BY Country
ORDER BY COUNT(CustomerID) DESC;

-- [Total Users]	   [Country]
-- 13					USA
-- 11					France
-- 11					Germany
-- 9					Brazil
-- 7					UK
-- 5					Mexico
-- 5					Spain
-- 4					Venezuela
-- 3					Argentina
-- 3					Canada
-- 3					Italy
-- 2					Austria

-- Note: omission of 'AS' keyword
