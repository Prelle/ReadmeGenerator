// TODO: Include packages needed for this application
import generateMarkdown from "./utils/generateMarkdown.js";
import { licenses } from "./utils/generateMarkdown.js";
import inquirer from "inquirer";
import validator from "validator";
import fs from "fs";

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",        
        message: "What is your project's name?",
        validate: result => validator.isEmpty(result) ? "A project name is required" : true
    },
    {
        type: "input",
        name: "description",
        message: "What is your project's description?",
        validate: result => validator.isEmpty(result) ? "A project description is required" : true
    },
    {
        type: "prompt",
        name: "installation",
        message: "(optional) How do you install your project?",
    },
    {
        type: "input",
        name: "usage",
        message: "(optional) How is your project used?"
    },
    {
        type: "input",
        name: "contributing",
        message: "(optional) How can users contribute to your project?"
    },
    {
        type: "input",
        name: "testing",
        message: "(optional) What are the instructions for testing the project?"
    },
    {
        type: "list",
        name: "license",
        message: "Select a license for your project",
        choices: convertLicensesToChoices()
    },
    {
        type: "input",
        name: "gitHub",
        message: "What is your GitHub username?",
        validate: result => validator.isEmpty(result) ? "A GitHub username is required" : true
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?",
        validate: result => validator.isEmail(result) ? true : "A valid email address is required"
    }
];

function convertLicensesToChoices() {
    let choices = [];

    for (const license of licenses) {
        const choice = {
            name: license.selector,
            value: license.id,
            short: license.selector
        };

        choices.push(choice);
    }

    return choices;
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    if(!fs.existsSync('./output')) {
        fs.mkdir('output', err => { if (err) throw err; } );
    }

    fs.writeFile('./output/' + fileName, data, err => err ? console.log(err) : console.log("File successfully created!"));
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) =>
    {
        const result = generateMarkdown(data);

        writeToFile('README.md', result);
    })    
}

// Function call to initialize app
init();
