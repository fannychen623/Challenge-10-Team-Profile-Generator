const inquirer = require("inquirer");
const generate = require("../src/generateProfile");
const manager = require("./Manager");
const engineer = require("./Engineer");
const intern = require("./Intern");

class Profile {
  constructor() {
    this.allProfiles = "";
  }

  create() {
    console.log('Welcome to the team generator! \nUse `npm run reset` to reset the dist/folder \n\nPlease build your team');
    const managerProfile = new manager();
    managerProfile.createProfile().then(() => {
      this.nextProfile();
    });
  }

  nextProfile() {
    inquirer
    .prompt([
      {
        type: 'list',
        message: 'Which type of team member would you like to add?',
        name: 'nextMember',
        choices: ['Engineer', 'Intern', 'I don\'t want to add any more team members']
      },
    ])
    .then((data) => {
      if (data.nextMember === "Engineer") {
        this.addEngineer();
      };
      if (data.nextMember === "Intern") {
        this.addIntern();
      };
      if (data.nextMember === "I don\'t want to add any more team members") {
        this.generateTeamProfile();
      };
    });
  };

  addEngineer() {
    const engineerProfile = new engineer();
    engineerProfile.createProfile().then(() => {
      this.nextProfile();
    });
  };

  addIntern() {
    const internProfile = new intern();
    internProfile.createProfile().then(() => {
      this.nextProfile();
    });
  };

  generateTeamProfile() {
    const teamProfile = new generate();
    teamProfile.createPage();
  }
};

module.exports = Profile;