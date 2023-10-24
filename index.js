// Requires inquirer, fs, and generateMarkdown.js for this application.
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// Created an array of questions for user input
const questions = [
{
    type: 'input',
    name: 'title',
    message: 'Enter title of the project: '
},
{
    type: 'input',
    name: 'description',
    message: 'Enter description of project: '
},
{
    type: 'input',
    name: 'installation',
    message: 'Enter installation intructions: '
},
{
    type: 'input',
    name: 'usage',
    message: 'Enter usage information: '
},
{
    type: 'list',
    name: 'license',
    message: 'Choose a License for your project: ',
    choices: ['MIT', 'GPL 3.0', 'Apache 2.0', 'None']
},
{
    type: 'input',
    name: 'contributing',
    message: 'Enter contribution guidelines: '
},
{
    type: 'input',
    name: 'tests',
    message: 'Enter test instructions: '
},
{
    type: 'input',
    name: 'github',
    message: 'Enter GitHub user: '
},
{
    type: 'input',
    name: 'email',
    message: 'Enter email address: '
}

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>{
        if (err){
            console.log(err);
        }
        else{
            console.log("README.md has been generated :3");
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        const markdown = generateMarkdown(answers);
        writeToFile("README.md", markdown);
    });
}

// Function call to initialize app
init();
