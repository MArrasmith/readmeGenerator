// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a short description of the purpose of your project.'
    },
    {
        type:'input',
        name:'usage',
        message:'How do you use your project? Provide step by step instructions.'
    },
    {
        type:'input',
        name:'liveSite',
        message:'What is the URL to your published site?'
    },
    {
        type:'input',
        name:'repository',
        message:'What is the URL to your GitHub repository?'
    },
    {
        type:'input',
        name:'credits',
        message:'Did you partner with any collaborators on your project or utilize any third party sites or assets? If so list them here.'
    },
    {
        type:'list',
        name:'licensure',
        message:'What licensure do you have for your project? Please select from the following.',
        choices:
        [
        'Apache License',
        'Boost Software License',
        'GNU AGPLv3',
        'GNU GPLv3',
        'GNU LGPLv3',
        'MIT License',
        'Mozilla Public License'
        ]
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() {
    //prompt the user for info
    //writeFile with fs
    //fs.writeFile('readme.md, generateMarkdown(answers))
}
// Function call to initialize app
init();
