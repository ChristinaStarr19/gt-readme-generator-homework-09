// function to generate markdown for README
const fs = require("fs");
const inputREADME = require("../inputREADME");
function generateMarkdown(response) {
  switch (response.license) {
    case "ibm":
      ibm(response);
      break;
    case "mit":
      mit(response);
      break;
  }
  return inputREADME(response);
}

function ibm(info) {
  info.badge = '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)'


}

function mit(info) {
  info.badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'

 
}
module.exports = generateMarkdown;
