USE business_db

/* need seed for department */
 INSERT INTO departments (id, name)
 VALUES (01, 'HR'),
 (02, 'TechSupport'),
 (03, 'Finance'),
 (04, 'Dev'),
 (05, 'Advirtisement'),
 (06, 'Facilities');

  

/* need seed for role */
INSERT INTO roles (title, salary, department_id)
VALUES ('Relations Manager', 80000.00, 01),
VALUES ('Security', 32000.00, 01),
VALUES ('Onboard Facilitator', 45000.00, 01),
VALUES ('Support Manager', 85000.00, 02),
VALUES ('Front-End Support', 45000.00, 02),
VALUES ('Back-End Support', 75000.00, 02),
VALUES ('Head Of Finance', 100000.00, 03),
VALUES ('Payroll Facilitator', 65000.00, 03),
VALUES ('Financial Advisor', 45000.00, 03),
VALUES ('Development Manager', 185000.00, 04),
VALUES ('Data Structure Specialist', 95000.00, 04),
VALUES ('Data Security', 10500.00, 04),
VALUES ('Implementation Dev', 100000.00, 04),
VALUES ('Web Maintanance Technician', 95000.00, 04),
VALUES ('Onboard Facilitator', 45000.00, 05),
VALUES ('Onboard Facilitator', 45000.00, 05),
VALUES ('Onboard Facilitator', 45000.00, 05),
VALUES ('Onboard Facilitator', 45000.00, 06),
VALUES ('Onboard Facilitator', 45000.00, 06),
VALUES ('Onboard Facilitator', 45000.00, 06);




/* need seeds for employee */
