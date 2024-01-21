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
    //will handle choice to View All Departments
    departmentList: () => {
        db.query('SELECT * FROM departments', (error, departments) =>{
            if (error) console.error(error);

            console.log(" \n\ "); //added this line for better table spacing
            console.table(departments);

            //redirects to initial user prompt
            start()
        })
    },

    //will handle choice to View All Roles
    roleList: () => {
        db.query('SELECT * FROM roles', (error, roles) =>{
            if (error) console.error(error);

            console.log(" \n\ "); //added this line for better table spacing
            console.table(roles);

            //redirects to initial user prompt
            start()
        })
    },

    //will handle choice to View All Employees
    employeeList: () => {
            db.query('SELECT * FROM employees JOIN roles ON employees.role_id = roles.id', ( error, employees ) => {
                if (error) console.error(error);

                console.log(" \n\ "); //added this line for better table spacing
                console.table(employees) 

                 //redirects to initial user prompt
                 start()
            })
    }, 

    exit: () => {
        process.exit();
    }
};









start();