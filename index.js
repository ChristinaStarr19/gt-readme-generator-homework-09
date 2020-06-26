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
        choices: ["mit" , "ibm"] 
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
]).then((response) => {fs.writeFileSync("SampleREADME.md",generateMarkdown(response) , function (err) {
    if (err) {
      console.log(err.message);
    } else {
      console.log("Your README has been saved");
    }
  });})

