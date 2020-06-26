const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");
const inquirer = require("inquirer");
//take in title of your project and sections entitled Description, 
// Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
inquirer.prompt([
    {
        type: "input",
        message: "What is the title of your README?",
        name: "title"
    },
    {
        type: "input",
        message: "Please type the description section of your README.",
        name: "description"
    },
    {
        type: "input",
        message: "Please type the installation section of your README.",
        name: "installation"
    },
    {
        type: "input",
        message: "Please type the usage section of your README.",
        name: "usage"
    },
    {
        type: "input",
        message: "Please type the contribution section of your README.",
        name: "contribution"
    },
    {
        type: "input",
        message: "Please type the test instructions section of your README.",
        name: "test"
    },
    {
        type: "list",
        message: "Which license would you like to add to your README?",
        name: "license",
        choices: ["mit" , "github"] 
    },
    {
        type: "input",
        message: "Please type your gitHub profile name.",
        name: "gitHub"
    },
    {
        type: "input",
        message: "Please type your email address.",
        name: "email"
    },
]).then((response) => {generateMarkdown(response)})
// // array of questions for user
// const questions = [
//     {
//         type: "input",
//         message: "What is the title of your README?",
//         name: "title"
//     },
//     // {
//     //     type: "input",
//     //     message: "What is the description of your README?",
//     //     name: "description"
//     // },
//     // {
//     //     type: "input",
//     //     message: "What is the title of your README?",
//     //     name: "title"
//     // },
//     // {
//     //     type: "input",
//     //     message: "What is the title of your README?",
//     //     name: "title"
//     // },
//     // {
//     //     type: "input",
//     //     message: "What is the title of your README?",
//     //     name: "title"
//     // },
//     // {
//     //     type: "input",
//     //     message: "What is the title of your README?",
//     //     name: "title"
//     // },
//     // {
//     //     type: "input",
//     //     message: "What is the title of your README?",
//     //     name: "title"
//     // },
//     // {
//     //     type: "input",
//     //     message: "What is the title of your README?",
//     //     name: "title"
//     // },
//     // {
//     //     type: "input",
//     //     message: "What is the title of your README?",
//     //     name: "title"
//     // },

// ];

// // function to write README file
// function writeToFile(fileName, response) {
//     fs.writeFile('SampleREADME.md', generateMarkdown(response), (err) => {
//         if (err) throw err;
//         console.log('The files has been saved!');
//     });
  
// }

// // function to initialize program
// // function init() {
// //  inquirer.prompt(questions).then(function(response){
// //      const {title} = response;
// //     console.log(response.title);

// //      writeToFile(response);
// //  })

// // }

// // function call to initialize program
// // init();
