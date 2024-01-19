/* handles creation of new business_db which will hold our tables */
DROP DATABASE IF EXISTS business_db;


CREATE DATABASE  business_db;

/* makes sure that the proceding code will use the business_db */
USE business_db;




/* need schema for department */
CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(30) NOT NULL,
);



/* need schema for role */
CREATE TABLE role (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL NOT NULL,
  department_id INT NOT NULL
  /* need to add FOREIGN key to connect to department id*/
);



/* need schema for employee */
CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT NOT NULL,
  /* need to add FOREIGN key to connect to role id*/
  manager_id INT NOT NULL,
  /* need to add FOREIGN key to connect to another employee that is the current
  manager of the selected employee*/
  /* will be null if employee has no manager */
);