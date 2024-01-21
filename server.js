//for using dependencies in package.json
const express = require('express')
const mysql = require('mysql2')
const inquirer = require('inquirer')

require('console.table');

//for setting up connection to the business_db
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password:'', 
        database: 'business_db'
    },
    console.log(`Connected to business_db`)
);

//for allowing use of terminal prompts for the user
const prompt = inquirer.createPromptModule();


//need a prompt that will let us choose from
//the challenge-required options
//View all Employees, View Departments, View All Roles, Also to exit


//this will start our initial terminal prompts to give user
//options choices on what they want to view in the business_db
const start = () => {
    prompt({
        message: 'Choose one of the following options',
        type: 'rawlist', 
        name: 'view',
        choices: [
            //The following choices will return values for use in 
            //js database queries.
            { name: 'View All Departments', value: 'departmentList'},
            { name: 'View All Roles', value: 'employeeList'},
            { name: 'View All Employees', value: 'employeeList'},
        ]




    })




};

start();