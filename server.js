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