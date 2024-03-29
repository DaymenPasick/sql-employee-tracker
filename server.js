//for using dependencies in package.json
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
            { name: 'Update Employee Role', value: 'updateEmployeeRole'},

            //for user to exit out of prompt loop
            { name: 'Exit', value: 'exit'},
        ]
    })
    //will take in initial prompt answers and execute functions accordingly
     .then((answers) => actions[answers.view]())
};



//contains all methods that will trigger based off initial terminal prompt choices
const actions = {



    //====== View All Departments Option ===================
    
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



    //====== View All Roles Option ===================

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



    //====== View All Employees Option ===================

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



    //====== Add Department Option ===================

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




    //====== Add Role Option ===================

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
            }
        ]
        //will take above prompt responses and insert into roles table
        prompt(newRolePrompt)
        .then((answer) => {

            //will prompt user to choose from a list of departments
            db.query(`
            SELECT id as value,
            name as name
            FROM departments
            `, (error, departments = []) => {
                prompt({
                    message: 'Choose the department for the new role',
                    type:'rawlist',
                    name: 'id',
                    choices: departments
                  })
                  .then((departmentChoice) => {

                    //uses prompt return data(answer) on line 173,
                    //prompt return data (departmentChoice) on line 187
                    //to create a new role
                    db.query(`INSERT INTO roles (title, salary, department_id) 
                    VALUES ('${answer.new_title}', ${answer.new_salary}, ${departmentChoice.id} )`,
                    (error, roles) => {
                     if (error) console.error(error)
                       console.log("\n\ " + `Sucessfully added ${answer.new_title} as a new role` + "\n\ ");
                         
                       //redirects user to initial prompt 
                       start()
                       })
                })
            })
        })
    },




    //====== Add Employee Option ===================

    //will handle choice to add new employee
    addEmployee: () => {
        const prompt = inquirer.createPromptModule();

        //setting prompt questions for adding new employee
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
            }
        ]
        //will take above prompt responses and insert into employees table
        prompt(newEmployeePrompt)
        .then((answers) => {

            //will prompt user to choose from a list of roles
            db.query(`
            SELECT id as value,
            title as name
            FROM roles
            `, (error, roles = []) =>{
              prompt({
                message: 'Choose a role for the employee',
                type:'rawlist',
                name: 'id',
                choices: roles
              })
               .then((roleChoice) => {
 
                //will prompt user to choose from a list of managers
                db.query(`
                SELECT id as value,
                CONCAT(first_name, ' ', last_name) as name
                FROM employees
                WHERE employees.manager_id IS NULL
                `, (error, managers = []) => {  
                  prompt({
                      message: 'Choose the employees manager',
                      type:'rawlist',
                      name: 'id',
                      choices: managers
                  })
                  .then((managerChoice) => {
                    db.promise().query('SELECT * FROM ?? WHERE ?', ['employees', managerChoice])
                        .then((managerChoiceData) => {
    
                            //these consts are set from data return in the above db.promise query
                            const managerId = managerChoiceData[0][0].id;
                            const managerName = managerChoiceData[0][0].first_name + " " + managerChoiceData[0][0].last_name;
    
                            //uses prompt return data(answers) on line 230,
                            //prompt return data(roleChoice) on line 244,
                            //and the consts on line 264 above to create new employee
                            db.query(`INSERT INTO employees (first_name, last_name, role_id, manager_id, manager_name)
                            VALUES ('${answers.new_first}', '${answers.new_last}', ${roleChoice.id}, ${managerId}, '${managerName}' )`,
                            (error, employees) => {
                             if (error) console.error(error)
                               console.log("\n\ " + `Sucessfully added ${answers.new_first} ${answers.new_last} as a new employee` + "\n\ ");
                                 
                               //redirects user to initial prompt 
                               start()
                               });
                        }) 
                   }) 
                })
               })
            })
        })
    },




    //====== Update Employee Option ===================

    //will handle choice to update employee
    updateEmployeeRole: () => {
        const prompt = inquirer.createPromptModule();

        //will select first and last names from employee for populating into an employees array
        db.query(`
          SELECT id as value,
          CONCAT(first_name, ' ', last_name) as name
          FROM employees
          `, (error, employees = []) => {  
            prompt({
                message: 'Choose the employee who needs their role updated',
                type:'rawlist',
                name: 'id',
                choices: employees,
            })
            //will select employee based off user's prompt choice
            .then((employeeChoice) => {
                


               //will select role titles from roles for populating into a roles array       
                db.query(`
                SELECT id as value,
                title as name FROM roles
                `, (error, roles = []) => {
                    prompt({
                        message: 'Choose a new role for the employee',
                        type: 'rawlist',
                        name: 'id',
                        choices: roles,
                    })
                    //will select new role based off user's prompt choice
                    .then((newRoleChoice) => {
  

                    //will take user's employee choice for role update, and the new role choice
                    //and change the employee's role accordingly
                    db.query(`
                     UPDATE employees
                     SET role_id = ${newRoleChoice.id} WHERE employees.id = ${employeeChoice.id}
                    `, (error, employees) => {
                        if (error) console.error(error)
                        console.log(" \n\ " + `Successfully changed employee's role` + " \n\ " );

                         //redirects user to initial prompt 
                         start()
                       })
                    })
                })        
            })
        })
    },




    //will handle user's choice to exit command prompt
    exit: () => {
        console.log(" \n\ Goodbye");
        process.exit();
        
    }
};


//will initiate the entire program
start();


                