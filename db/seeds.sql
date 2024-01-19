USE business_db

/* need seed for department */
 INSERT INTO departments (id, name)
 VALUES (01, 'HR'),
 (02, 'TechSupport'),
 (03, 'Finance'),
 (04, 'Dev'),
 (05, 'Advirtisement');
  

/* need seed for role */
INSERT INTO roles (title, salary, department_id)
VALUES ('Relations Tech', 50000.00, 01),
VALUES ('Security', 32000.00, 01),
VALUES ('Onboard Facilitator', 45000.00, 01),
VALUES ('Onboard Facilitator', 45000.00, 02),
VALUES ('Onboard Facilitator', 45000.00, 02),
VALUES ('Onboard Facilitator', 45000.00, 02),
VALUES ('Onboard Facilitator', 45000.00, 03),




/* need seeds for employee */
