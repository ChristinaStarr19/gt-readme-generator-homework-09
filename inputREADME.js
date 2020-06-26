function inputREADME (response) {
    const {title, description, installation, usage, contribution, test, license, gitHub, email, badge} = response;
    return `
# ${title.charAt(0).toUpperCase()}

${badge}

## Description

${description}
    
## Table of Contents 
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#test)
* [Questions](#questions)
    
## Installation
    
${installation}

## Usage 
    
${usage}
    
## License

This project is license under the ${license} license.
    
## Contributing 
    
${contribution}    

## Test 
    
${test}   

## Questions
For further questions, please email me at ${email}.
Go to https://github.com/${gitHub} to access github profile.    
`
}





module.exports = inputREADME;