DROP DATABASE IF EXISTS business_db;

CREATE DATABASE  business_db;

USE business_db;

CREATE TABLE departments (
  id INT NOT NULL,
  name VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE roles (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL NOT NULL,
  department_id INT,
  FOREIGN KEY (department_id)
  REFERENCES departments(id)
  ON DELETE SET NULL

);


CREATE TABLE employees (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT NOT NULL,
  manager_id INT,
  Foreign Key (role_id) 
  REFERENCES roles(id),
  Foreign Key (manager_id) 
  REFERENCES employees(id)
  ON DELETE SET NULL

);
/* 
ALTER TABLE employees
ALTER manager_id SET NULLIF(manager_id, ''); */

/* mysql > select NULLIF(Name, '') as EmptyStringNULL from <table>*/