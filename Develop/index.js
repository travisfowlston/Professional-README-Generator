// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const {
  renderLicenseBadge,
  renderLicenseSection,
} = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "projectName",
    message: "What is the name of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "How would you describe your project?",
  },
  {
    type: "input",
    name: "installation",
    message: "Please include your installation instructions:",
  },
  {
    type: "input",
    name: "usage",
    message: "Please include your usage inforamtion:",
  },
  {
    type: "list",
    name: "license",
    message: "Please select a license for your project:",
    choices: [
      { name: "MIT", value: "MIT" },
      { name: "Apache 2.0", value: "Apache 2.0" },
      { name: "GNU GPLv3", value: "GNU GPLv3" },
      { name: "None", value: "None" },
    ],
  },
  {
    type: "input",
    name: "contributions",
    message: "Who contributed to this project?",
  },
  {
    type: "input",
    name: "tests",
    message: "Please include your test instructions:",
  },
  {
    type: "input",
    name: "userName",
    message: "What is your GitHub username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
];

/* Created a function to generate the README structure and add the user input. */
function createReadMe(answers) {
  const readmeContent = `
# ${answers.projectName} ${renderLicenseBadge(answers.license)}
  
## Description
      
${answers.description}

## Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [License](#license)
4. [Contributions](#contributions)
5. [Tests](#tests)
6. [Questions](#questions)
  
## Installation
      
${answers.installation}

## Usage
  
${answers.usage}

## License 

${renderLicenseSection(answers.license)}

## Contributions

${answers.contributions}

## Tests

${answers.tests}

## Questions

GitHub: [My GitHub Profile](https://github.com/${answers.userName})
Email: ${answers.email}
`;
  return readmeContent;
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log("Successfully created README.md!");
    }
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    const readMeContent = createReadMe(answers);
    writeToFile("README.md", readMeContent);
  });
}

// Function call to initialize app
init();
