//TODO: Include packages needed for this application
//Add generatemarkdown function
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');


const questions = () => {
    return inquirer.prompt([
        //project title
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?'
        },
        //project description
        {
            type: 'input',
            name: 'description',
            message: 'Provide a short description of the purpose of your project.'
        },
        //installation instructions
        {
            type: 'input',
            name: 'installation',
            message: 'Are there any special installation instructions for your project?'
        },
        //project usage
        {
            type: 'input',
            name: 'usage',
            message: 'How do you use your project? Provide step by step instructions.'
        },
        //URL section
        {
            type: 'input',
            name: 'liveSite',
            message: 'What is the URL to your published site?'
        },
        //URL section
        {
            type: 'input',
            name: 'repository',
            message: 'What is the URL to your GitHub repository?'
        },
        //constributing section
        {
            type: 'input',
            name: 'credits',
            message: 'Did you partner with any collaborators on your project or utilize any third party sites or assets? If so list them here.'
        },
        //license and renderlicensebadge function
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
        //questions
        {
            type: 'input',
            name: 'username',
            message: 'Please provide your GitHub username?'
        },
        //questions
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?'
        },
        //questions
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
