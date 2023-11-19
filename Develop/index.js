// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "projectTitle",
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
    name: "license",
    message: "Please provide license instructions:",
  },
];
inquirer.prompt(questions).then((answers) => {
  console.log(answers.projectTitle);
  console.log(answers.description);
  console.log(answers.installation);
  console.log(answers.license);
});

/* Created a function to generate the README structure and add the user input. */
function createReadMe(answers) {
  const readmeContent = `
# ${answers.projectTitle}
  
## Description
      
${answers.description}
  
## Installation
      
${answers.installation}
  
## License
      
${answers.license}
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
