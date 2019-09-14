# https://leetcode.com/problems/shortest-distance-in-a-plane/submissions/

SELECT ROUND(SQRT(MIN((p1.x - p2.x)*(p1.x - p2.x)+(p1.y - p2.y)*(p1.y - p2.y))),2) AS shortest
FROM point_2d p1,point_2d p2
WHERE p1.x <> p2.x or p1.y <> p2.y;