// // array of questions for user
// const questions = [

// ];

// // function to write README file
// function writeToFile(fileName, data) {
// }

// // function to initialize program
// function init() {

// }

// // function call to initialize program
// init();

const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown")
const writeFileAsync = util.promisify(fs.writeFile);

//Questions
function promptUser() {
    return inquirer.prompt([{
            type: "input",
            name: "projectTitle",
            message: "What is the name of the project?",
        },
        {
            type: "input",
            name: "description",
            message: "Briefly describe the project: "
        },
        {
            type: "input",
            name: "installation",
            message: "How does one install this project? ",
        },
        {
            type: "input",
            name: "usage",
            message: "What does this project do?"
        },
        {
            type: "list",
            name: "license",
            message: "What is the license for this project? ",
            choices: [
                "Apache",
                "Academic",
                "GNU",
                "ISC",
                "MIT",
                "Mozilla",
                "Open"
            ]
        },
        {
            type: "input",
            name: "contributing",
            message: "Who worked on this project? "
        },
        {
            type: "input",
            name: "tests",
            message: "Is there a test function? "
        },
        {
            type: "input",
            name: "username",
            message: "Please enter your GitHub username: "
        },
        {
            type: "input",
            name: "email",
            message: "Please enter your email: "
        }
    ]);
}

// Async function using util.promisify 
async function init() {
    try {
        // Ask user questions and generate responses
        const answers = await promptUser();
        const generateContent = generateMarkdown(answers);
        // Write new README.md to dist directory
        await writeFileAsync('README.md', generateContent);
        console.log('README Generated!');
    } catch (err) {
        console.log(err);
    }
}

init();