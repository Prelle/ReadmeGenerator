// Include packages needed for this application
import generateMarkdown from "./utils/generateMarkdown.js";
import { licenses } from "./utils/generateMarkdown.js";
import inquirer from "inquirer";
import validator from "validator";
import fs from "fs";

// Array of questions for user input
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
    },
    {
        type: "input",
        name: "filename",
        default: "README",
        message: "What would you like the filename to be?"
    }
];

// Converts the licenses array into a choices array for use by inquirer
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

// Write the file to the output folder, creating the path as needed
function writeToFile(fileName, data) {
    if(!fs.existsSync('./output')) {
        fs.mkdir('output', err => { if (err) throw err; } );
    } else if(fs.existsSync(`./output/${fileName}`)) {
        inquirer.prompt([
            {
                type: "confirm",
                name: "response",
                default: false,
                message: "File exists! Overwrite?"
            }
        ]).then(result => {

        });
    }

    fs.writeFile('./output/' + fileName, data, err => err ? console.log(err) : console.log("File successfully created!"));
}

// Main code
function init() {
    // Get the users responses and write them to the new file
    inquirer.prompt(questions).then((data) =>
    {
        const result = generateMarkdown(data);

        const filename = data.filename + '.md';

        writeToFile(filename, result);
    })    
}

// Function call to initialize app
init();
