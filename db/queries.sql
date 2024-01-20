SELECT *
FROM roles
JOIN departments ON roles.department_id = department.id;