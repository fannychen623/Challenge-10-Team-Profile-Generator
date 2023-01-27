// define the packages needed for this application
const inquirer = require("inquirer");
const generate = require("../src/generateProfile");
const manager = require("./Manager");
const engineer = require("./Engineer");
const intern = require("./Intern");

// define the class to be exported
class Profile {
  // define the constructor function for the class
  // set the default role to 'Employee'
  constructor() {
    this.role = 'Employee';
  }

  // start creating the profiles
  create() {
    // log starting message
    console.log('Welcome to the team generator! \nUse `npm run reset` to reset the dist/folder \n\nPlease build your team');
    // set the role to 'Manager'
    this.role = 'Manager';
    // call the manager class from the module
    const managerProfile = new manager();
    // call the next profile function after passing the manager class
    managerProfile.createProfile().then(() => {
      this.nextProfile();
    });
  }

  // launch inquirer and determine the next profile role
  nextProfile() {
    return inquirer
      .prompt([
        {
          type: 'list',
          message: 'Which type of team member would you like to add?',
          name: 'role',
          choices: ['Engineer', 'Intern', 'I don\'t want to add any more team members']
        },
      ])
      // based on the response, call the respective functions
      .then((data) => {
        if (data.role === "Engineer") {
          this.addEngineer();
        };
        if (data.role === "Intern") {
          this.addIntern();
        };
        if (data.role === "I don\'t want to add any more team members") {
          this.generateTeamProfile();
        };
      });
  };

  // call the engineer class from the module
  addEngineer() {
    // set the role to 'Engineer'
    this.role = 'Engineer';
    const engineerProfile = new engineer();
    // call the next profile function after passing the engineer class
    engineerProfile.createProfile().then(() => {
      this.nextProfile();
    });
  };

  // call the engineer class from the module
  addIntern() {
    // set the role to 'Intern'
    this.role = 'Intern';
    const internProfile = new intern();
    // call the next profile function after passing the inter class
    internProfile.createProfile().then(() => {
      this.nextProfile();
    });
  };

  // call the generate class from the module
  generateTeamProfile() {
    // set the role to 'None'
    this.role = 'None';
    const teamProfile = new generate();
    // call function to generate the team profile page
    teamProfile.createPage();
  }
};

// export the class
module.exports = Profile;