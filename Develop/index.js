const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js")

const questions = [
    {
        type:"input",
        name: "github",
        message: "What is your github username?",
    },
    {
        type: "input",
        name: "email",
        message: "What is your email?",
    },
    {
        type: "input",
        name: "title",
        message: "What is the project title?",
    }, 
    {
        type: "list",
        name: "license",
        message: "What kind of license should your project have?",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
    },
    {
        type: "input",
        name: "description",
        message: "What is the description of the project?",
    },
    {
        type: "input",
        name: "installation",
        message: "How do we install this app?",
        default: "npm i",
    },
    {
        type: "input",
        name: "test",
        message: "What command should be used to run tests if any?",
    },
    {
        type: "input",
        name: "usage",
        message: "What does the user need to know about using this application?",
    },
    {
        type: "input",
        name: "contributing",
        message: "Who is contributing to this project?",
    }
];

function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

function init() {
    inquirer.prompt(questions).then(function (responses) {
        console.log(responses);
        console.log("generating readme...");
        writeToFile("README.md", generateMarkdown({ ...responses }))
    })
}

// Function call to initialize app
init();
