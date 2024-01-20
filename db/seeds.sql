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





INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ('Emily', 'Love', 1, NULL),
('Bronson', 'Dole', 2, 1),
('Dawn', 'Swie', 3, 1),
('Steve', 'Henderson', 4, NULL),
('Jose', 'Huerez', 5, 2),
('Zed', 'Coontz', 6, 2),
('Hanchul', 'Doev', 7, NULL),
('Racheal', 'Davenport', 8, 3),
('Ethan', 'Skyther', 9, 3),
('Steve', 'Joberson', 10, NULL),
('Jasmine', 'Yuri', 111, 4),
('Song', 'Wan', 12, 4),
('Borik', 'Dvenchi', 13, 4),
('Sven', 'Dvenchi', 14, 4),
('Gunner', 'Mattz', 15, NULL),
('Tanner', 'Linnony', 16, 5),
('Newton', 'Skamander', 17, 5),
('Dan', 'Falkner', 18, NULL),
('Zoey', 'Ienyah', 19, 6),
('Terry', 'Ronner', 20, 6);
