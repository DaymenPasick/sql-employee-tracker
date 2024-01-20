USE business_db


 INSERT INTO departments (id, name)
 VALUES (01, 'HR'),
 (02, 'TechSupport'),
 (03, 'Finance'),
 (04, 'Dev'),
 (05, 'Advirtisement'),
 (06, 'Facilities');

  


INSERT INTO roles (title, salary, department_id)
VALUES ('Relations Manager', 80000.00, 1),
 ('Security', 32000.00, 1), 
 ('Onboard Facilitator', 45000.00, 1),
 ('Support Manager', 85000.00, 2),
 ('Front-End Support', 45000.00, 2),
 ('Back-End Support', 75000.00, 2),
 ('Head Of Finance', 100000.00, 3),
 ('Payroll Facilitator', 65000.00, 3),
 ('Financial Advisor', 45000.00, 3),
 ('Development Manager', 185000.00, 4),
 ('Data Structure Specialist', 95000.00, 4),
 ('Data Security', 10500.00, 4),
 ('Implementation Dev', 100000.00, 4),
 ('Web Maintanance Technician', 95000.00, 4),
 ('Marketing Director', 95000.00, 5),
 ('Business Translator', 75000.00, 5),
 ('Leads&Adds Facilitator', 65000.00, 5),
 ('Facilities Manager', 65000.00, 6),
 ('Santitation Technician', 35000.00, 6),
 ('Contracted Cleaner', 85000.00, 6);





INSERT INTO employees (first_name, last_name, role_id)
VALUES ('John', 'Doe', 1),
('Bo', 'Doe', 1);
/* ('Sue', 'Doe', 3, 1); */