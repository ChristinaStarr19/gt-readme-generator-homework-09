// function to generate markdown for README
const fs = require("fs");
const inputREADME = require("../inputREADME");
function generateMarkdown(response) {
  fs.writeFileSync("SampleREADME.md", inputREADME(response), function (err) {
    if (err) {
      console.log(err.message);
    } else {
      console.log("Your README has been saved");
    }
  });
}

module.exports = generateMarkdown;
