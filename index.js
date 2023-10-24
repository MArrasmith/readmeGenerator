// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
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
            type: 'input',
            name: 'installation',
            message: 'Are there any special installation instructions for your project?'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'How do you use your project? Provide step by step instructions.'
        },
        {
            type: 'input',
            name: 'liveSite',
            message: 'What is the URL to your published site?'
        },
        {
            type: 'input',
            name: 'repository',
            message: 'What is the URL to your GitHub repository?'
        },
        {
            type: 'input',
            name: 'credits',
            message: 'Did you partner with any collaborators on your project or utilize any third party sites or assets? If so list them here.'
        },
        {
            type: 'list',
            name: 'licensure',
            message: 'What licensure do you have for your project? Please select from the following.',
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
        },
        {
            type: 'input',
            name: 'username',
            message: 'Please provide your GitHub username?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Do you you have any tests that can be ran for your project? If so, how do you run them?'
        }
    ]);
}

// TODO: Create a function to write README file
const { writeFile } = require('fs').promises;

// TODO: Create a function to initialize app
const init = () => {
    //prompt the user for info
    questions()
    //writeFile with fs
    .then((answers) => writeFile('README.md', generateMarkdown(answers)))
}
// Function call to initialize app
init();
