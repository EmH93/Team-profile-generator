const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.
//Manager questions
const managerQuestions = () =>
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is your team manager's name?",
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter your team manager's employee ID:",
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter your team manager's email:",
        },
        {
            type: 'input',
            name: 'office',
            message: "What is your office number?",
        }
    ]);

//Engineer questions
const engineerQuestions = () =>
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
        },
        {
            type: 'input',
            name: 'id',
            message: 'Please enter your employee ID:',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email:'
        },
        {
           type: 'input',
           name: 'gitHub',
           message: 'What is your github username?', 
        }
    ]);

//Intern questions
const internQuestions = () =>
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
        },
        {
            type: 'input',
            name: 'id',
            message: 'Please enter your employee ID:',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email:'
        },
        {
            type: 'input',
            name: 'school',
            message: 'What is the name of your school?',
        }
    ]);

//Options questions
const choices = () =>
    inquirer.prompt([
        {
            type: 'list',
            name: 'choice',
            message: 'What would you like to do?',
            choices: ['Add an engineer', 'Add an intern', 'Finish building the team'],
        }
    ])


//initalize programme
async function startUp(){
    await managerQuestions();
    await choices()
        .then(function(data){
            if(data.choice === 'Add an engineer'){
                engineerQuestions();
            } else if(data.choice === 'Add an intern'){
                internQuestions();
            } else if(data.choice === 'Finish building the team'){
                generateTeam()
            };
        })

}

startUp();