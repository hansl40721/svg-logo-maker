const inquirer = require("inquirer");
const fs = require('fs');
const { Circle, Triangle, Square } = require("./lib/shapes");

const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Choose up to three characters to add to your logo',
        validate: (input) => {
            const maxLength = 3;
            if (input.length <= maxLength) {
                return true;
            } else {
                return `Text nust be ${maxLength} characters or less`;
            }
        }
    },
    {
        type: 'input',
        name: 'textColor',
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
        name: 'shapeColor',
        message: 'Enter the color name or hex code for the shape of your logo'
    }
];

const answers = [];

function createShape(answers) {
    let shape;
    
    switch (answers[2].shape) {
        case 'Circle': shape = new Circle(); break;
        case 'Triangle': shape = new Triangle(); break;
        case 'Square': shape = new Square(); break;
        default: console.log('Invalid shape'); return;
    }

    shape.setColor(answers[3].shapeColor)
    shape.setText(answers[0].text);
    shape.setTextColor(answers[1].textColor);

    const svgMarkup = shape.render();
    console.log(svgMarkup);

    fs.writeFileSync('logo.svg', svgMarkup);

    console.log('Genereated logo.svg');
};

async function init() {
    try {
        for (const question of questions) {
            const answer = await inquirer.prompt(question);
            answers.push(answer)
        }
        console.log(answers);
        console.log("Creating your logo");
        createShape(answers);

    } catch (err) {
        console.error(err);
    }
};

init();

module.exports = { init };