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

//for use of inquier's prompt functionality
const prompt = inquirer.createPromptModule();






//declaring a start function for all of our terminal prompts
const start = () => {
    prompt({
        message: 'Choose one of the following options',
        type: 'rawlist', 
        name: 'view',
        choices: [
            //choices will return values for use in 
            //db.queries. --- Viewing-purposed.
            { name: 'View All Departments', value: 'departmentList'},
            { name: 'View All Roles', value: 'roleList'},
            { name: 'View All Employees', value: 'employeeList'},
            
            //choices will return values for use in 
            //db.queries. --- Updating-purposed.
            { name: 'Add Department', value: 'addDepartment'},
            { name: 'Add Role', value: 'addRole'},
            { name: 'Add Employee', value: 'addEmployee'},
            { name: 'Update Employee', value: 'updateEmployee'},

            //for user to exit out of prompt loop
            { name: 'Exit', value: 'exit'},
        ]
    })
    //will take in initial prompt answers and execute functions accordingly
     .then((answers) => actions[answers.view]())
};



//contains all methods that will trigger based off initial terminal prompt choices
const actions = {
    //will handle choice to View All Departments
    departmentList: () => {
        db.query('SELECT * FROM departments', (error, departments) =>{
            if (error) console.error(error);

            //for better table spacing in log result
            console.log(" \n\ "); 
            console.table(departments);

            //redirects to initial user prompt
            start()
        })
    },

    //will handle choice to View All Roles
    roleList: () => {
        db.query('SELECT * FROM roles', (error, roles) =>{
            if (error) console.error(error);

            //for better table spacing in log result
            console.log(" \n\ "); 
            console.table(roles);

            //redirects to initial user prompt
            start()
        })
    },

    //will handle choice to View All Employees
    employeeList: () => {

        //join statement for the db.query used in this method
        const joinStatement = `
            SELECT employees.id, employees.first_name, employees.last_name, 
            roles.title, roles.salary, departments.name AS department, employees.manager_name
            FROM employees 
            LEFT JOIN roles 
            ON employees.role_id = roles.id
            LEFT JOIN departments
            ON roles.department_id = departments.id;`

            //uses the above joinStatement for query parameter
            db.query(joinStatement, ( error, employees ) => {
                if (error) console.error(error);

                //for better table spacing in log result
                console.log(" \n\ "); 
                console.table(employees) 

                 //redirects to initial user prompt
                 start()
            })
    }, 

    //will handle choice to add department
    addDepartment: () => {
        const prompt = inquirer.createPromptModule();
        prompt({
            message: 'Please type your new department name',
            type: 'input', 
            name: 'new_department'
        })
        //will take above prompt response and insert into department table
        .then((answer) => {
          db.query(`INSERT INTO departments (name) VALUES ('${answer.new_department}')`, (error, departments) => {
            if (error) console.error(error)
              console.log("\n\ " + `Sucessfully added ${answer.new_department} as a new department` + "\n\ ");
                
              //redirects user to initial prompt 
              start()
            })
        })
    },


    // //will handle choice to add role
    addRole: () => {
        const prompt = inquirer.createPromptModule();

        //setting prompt questions for adding new role
        const newRolePrompt = [
            {
            message: 'Please type the title of the new role',
            type: 'input', 
            name: 'new_title'
            },
            {
            message: 'Please type the salary of the new role',
            type: 'number', 
            name: 'new_salary'
            },
            {
            message: 'Please type the deparment ID of the new role',
            type: 'number', 
            name: 'department_id'
            },
        ]
        //will take above prompt responses and insert into roles table
        prompt(newRolePrompt)
        .then((answer) => {
          db.query(`INSERT INTO roles (title, salary, department_id) 
           VALUES ('${answer.new_title}', ${answer.new_salary}, ${answer.department_id} )`,
           (error, roles) => {
            if (error) console.error(error)
              console.log("\n\ " + `Sucessfully added ${answer.new_title} as a new role` + "\n\ ");
                
              //redirects user to initial prompt 
              start()
            })
        })
    },


    //will handle choice to add new employee
    addEmployee: () => {
        const prompt = inquirer.createPromptModule();

        //setting prompt questions for adding new role
        const newEmployeePrompt = [
            {
            message: 'Please type the first name of the new employee',
            type: 'input', 
            name: 'new_first'
            },
            {
            message: 'Please type the last name of the new employee',
            type: 'input', 
            name: 'new_last'
            },
            {
            message: 'Please type the role ID of the new employee',
            type: 'number', 
            name: 'role_id'
            },
            {
            message: 'Please type the manager ID of the new employee (press ENTER if none)',
            type: 'number', 
            name: 'manager_id',
            default: 'NULL'
            },
            {
            message: 'Please type the name of the new employees manager (press ENTER if none)',
            type: 'input', 
            name: 'manager_name',
            default: 'NULL'
            },
        ]
        //will take above prompt responses and insert into employees table
        prompt(newEmployeePrompt)
        .then((answer) => {
          db.query(`INSERT INTO employees (first_name, last_name, role_id, manager_id, manager_name)
           VALUES ('${answer.new_first}', '${answer.new_last}', ${answer.role_id}, ${answer.manager_id},${answer.manager_name} )`,
           (error, employees) => {
            if (error) console.error(error)
              console.log("\n\ " + `Sucessfully added ${answer.new_first} ${answer.new_last} as a new employee` + "\n\ ");
                
              //redirects user to initial prompt 
              start()
            })
        })
    },



    //will handle choice to update employee
    updateEmployee: () => {
        //need a prompt to choose employee
        const prompt = inquirer.createPromptModule();
        db.query(`
          SELECT id as value,
          CONCANT(first_name, ' ', last_name) as name
          FROM employee
          `, (error, employees = []) => {
            prompt({
                message: 'Choose an employee to update',
                type:'rawlist',
                name: 'employeeChoice',
                choices: employees,
            })


          })





        //need code to update info from that employee
    },

    //will handle user's choice to exit command prompt
    exit: () => {
        process.exit();
    }
};


//will initiate the entire program
start();