USE business_db


 INSERT INTO departments (id, name)
 VALUES (01, 'HR'),
 (02, 'TechSupport'),
 (03, 'Finance'),
 (04, 'Dev'),
 (05, 'Advirtisement'),
 (06, 'Facilities');

  


INSERT INTO roles (title, salary, department_id)
VALUES ('Relations Manager', 80000.00, 01),
 ('Security', 32000.00, 01),
 ('Onboard Facilitator', 45000.00, 01),
 ('Support Manager', 85000.00, 02),
 ('Front-End Support', 45000.00, 02),
 ('Back-End Support', 75000.00, 02),
 ('Head Of Finance', 100000.00, 03),
 ('Payroll Facilitator', 65000.00, 03),
 ('Financial Advisor', 45000.00, 03),
 ('Development Manager', 185000.00, 04),
 ('Data Structure Specialist', 95000.00, 04),
 ('Data Security', 10500.00, 04),
 ('Implementation Dev', 100000.00, 04),
 ('Web Maintanance Technician', 95000.00, 04),
 ('Marketing Director', 95000.00, 05),
 ('Business Translator', 75000.00, 05),
 ('Leads&Adds Facilitator', 65000.00, 05),
 ('Facilities Manager', 65000.00, 06),
 ('Santitation Technician', 35000.00, 06),
 ('Contracted Cleaner', 45000.00, 06);





/* INSERT INTO employees (first_name, last_name, role_id) */