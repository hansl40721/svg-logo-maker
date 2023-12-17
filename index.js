const inquirer = require("inquirer");
const fs = require('fs');

const questions = [
    {
        type: 'confirm',
        
    },
    {
        type: 'input',
        name: 'text',
        message: 'Choose up to three characters to add to your logo'
    },
    {
        type: 'input',
        name: 'text color',
        message: 'Enter the color name or hex code for the text of your logo'
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Please select one of the following as the shape of your logo',
        choices: ['Circle', 'Triangle', 'Square']
    },
    {
        type: 'input',
        name: 'shape color',
        message: 'Enter the color name or hex code for the shape of your logo'
    }
];

async function init() {
    try {
        const answers = await inquirer.prompt(questions);
        console.log(answers);
        console.log("Creating your logo");



    } catch (err) {
        console.error(err);
    }
}

init();