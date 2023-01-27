const inquirer = require("inquirer");
const generate = require("../src/generateProfile");
const manager = require("./Manager");
const engineer = require("./Engineer");
const intern = require("./Intern");

class Profile {
  constructor() {
    this.role = 'Employee';
  }

  create() {
    console.log('Welcome to the team generator! \nUse `npm run reset` to reset the dist/folder \n\nPlease build your team');
    this.role = 'Manager';
    const managerProfile = new manager();
    managerProfile.createProfile().then(() => {
      this.nextProfile();
    });
  }

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

  addEngineer() {
    this.role = 'Engineer';
    const engineerProfile = new engineer();
    engineerProfile.createProfile().then(() => {
      this.nextProfile();
    });
  };

  addIntern() {
    this.role = 'Intern';
    const internProfile = new intern();
    internProfile.createProfile().then(() => {
      this.nextProfile();
    });
  };

  generateTeamProfile() {
    this.role = 'None';
    const teamProfile = new generate();
    teamProfile.createPage();
  }
};

module.exports = Profile;