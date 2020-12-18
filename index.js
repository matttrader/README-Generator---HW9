const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

// Below is an array of questions for the user to provide a response.

const questions = [
    {
        type: "input",
        name: "githubUser",
        message: "What is your github username"
    },

    {
        type: "input",
        name: "emailAddress",
        message: "What is your email address"
    },

    {
        type: "list",
        name: "license",
        message: "Which License is used",
        choices: ["MIT", "GPL", "APACHE"]
    }
];

// Below is the function to write README file.
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(__dirname, fileName), data);
}

// Below is the function to initialize program.
function init() {
    inquirer.prompt(questions).then(function(answers) {
        writeToFile("README.md", generateMarkdown(answers))
    })
   
}

// Below is the function call to initialize program.
init();
