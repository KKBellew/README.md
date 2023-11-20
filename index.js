// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const inquirer = require('inquirer');
const fs = require('fs');
const path= require('path');
const generateMarkdown = required('./generateMarkdown');

const questions = [

questions
  .prompt([
    {
      type: 'input',
      message: 'What is the name of your project?',
      name: 'projectTitle',
    },
    {
      type: 'input',
      message: 'Write a breif description of your project?',
      name: 'Project description',
    },
    {
      type: 'input',
      message: 'what are the steps to install your project for deplayment?',
      name: 'Installation',
    },
    {
        type: 'input',
        message: 'How should someone use your project?',
        name: 'Usage',
    },
    {    
        type: 'input',
        message: 'Are you open to contributions?',
        name: 'Contributing',
    },
    {
        type: 'input',
        message: 'Do you have any tests for your project? If yes, how can one run them?',
        name: 'Tests',
    },
    {
        type: 'list',
        message: 'What license is your project using?',
        name: 'license',
        choices: ['Apache 2.0','GNU v3.0','MIT','BSD 2','BSD 3', 'Boost 1.0','Creative Commons Zero' ,'Eclipse 2.0'], 
    },
    {
        type: 'input',
        message: 'Do you have a walkthrough video or picture to display?',
        name: 'walkthrough video',
    },
    {
        type: 'input',
        message: 'What is you GitHub Username and email?',
        name: 'Questions',
    }, 
  ])

];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

const filePath= path.join(__dirname, fileName);
const content = JSON.stringify(data, null, 2);

fs.writeFileSync(filePath, content, 'utf8');
console.log(`file "${fileName}" has been created!`);



// TODO: Create a function to initialize app
function initApp() {
    inquirer
    .prompt(questions)
    .then(answers => {
      
      const readmeContent = generateMarkdown(answers);
      writeToFile('README.md', readmeContent);
    })
    .catch(error => {
      console.error('Error during initialization:', error);
    });
}

// Function call to initialize app
initApp();
