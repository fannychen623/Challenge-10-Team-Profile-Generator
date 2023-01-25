// define packages needed for this application
const inquirer = require('inquirer');

// use inquirer to capture user input, launched at initialization
// must be installed before usage
inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your GitHub username?',
      name: 'username',
    },
    {
      type: 'input',
      message: 'What is your email address?',
      name: 'email',
    },
  ])
  .then((data) => {

  });