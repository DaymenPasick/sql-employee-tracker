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
            { name: 'View All Roles', value: 'roleList'},
            { name: 'View All Employees', value: 'employeeList'},
            { name: 'Exit', value: 'exit'},
        ]


    })
    //this will take the value from the key-value pair choosen based off
    //user's initial terminal prompt answer. It will use that as a 
    //parameter for our actions()
     .then((answers) => actions[answers.view]())
};


const actions = {

    departmentList:

    roleList:

    employeeList:

    exit:








};









start();