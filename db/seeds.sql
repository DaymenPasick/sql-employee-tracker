USE business_db


 INSERT INTO departments (name)
 VALUES ('HR'),
 ('TechSupport'),
 ('Finance'),
 ('Dev'),
 ('Advirtisement'),
 ('Facilities');

  


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





INSERT INTO employees (first_name, last_name, role_id, manager_id, manager_name)
VALUES ('Emily', 'Love', 1, NULL, NULL),
('Bronson', 'Dole', 2, 1, 'Emily Love'),
('Dawn', 'Swie', 3, 1, 'Emily Love'),
('Steve', 'Henderson', 4, NULL, NULL),
('Jose', 'Huerez', 5, 4, 'Steve Henderson'),
('Zed', 'Coontz', 6, 4, 'Steve Henderson'),
('Hanchul', 'Doev', 7, NULL, NULL),
('Racheal', 'Davenport', 8, 7, 'Hanchul Doev'),
('Ethan', 'Skyther', 9, 7, 'Hanchul Doev'),
('Steve', 'Joberson', 10, NULL, NULL),
('Jasmine', 'Yuri', 11, 10, 'Steve Joberson'),
('Song', 'Wan', 12, 10, 'Steve Joberson'),
('Borik', 'Dvenchi', 13, 10, 'Steve Joberson'),
('Sven', 'Dvenchi', 14, 10, 'Steve Joberson'),
('Gunner', 'Mattz', 15, NULL, NULL),
('Tanner', 'Linnony', 16, 15, 'Gunner Mattz'),
('Newton', 'Skamander', 17, 15, 'Gunner Mattz'),
('Dan', 'Falkner', 18, NULL, NULL),
('Zoey', 'Ienyah', 19, 18, 'Dan Falkner'),
('Terry', 'Ronner', 20, 18, 'Dan Falkner');
