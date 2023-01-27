// define packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// template for the manager card to be populated on the html file
const managerCard = ({name, id, email, officeNumber}) =>
      `<div class="col-4">
        <div class="card" style="width: 18rem;">
          <div class="card-body text-white bg-primary mb-3">
            <h2 class="card-title">${name}</h2>
            <h2 class="card-title"><i class="bi-cup-hot-fill"></i> Manager</h2>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${id}</li>
            <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
            <li class="list-group-item">Office Number: ${officeNumber}</li>
          </ul>
        </div>
      </div>`;

// define the class to be exported
class Manager {
  // launch inquirer to prompt a series of questions to record data
  createProfile() {
    return inquirer
      .prompt([
        {
          type: 'input',
          message: 'What is the team manager\'s name?',
          name: 'name',
        },
        {
          type: 'input',
          message: 'What is the team manager\'s id?',
          name: 'id',
        },
        {
          type: 'input',
          message: 'What is the team manager\'s email?',
          name: 'email',
        },
        {
          type: 'input',
          message: 'What is the team manager\'s office number?',
          name: 'officeNumber',
        },
      ])
      .then((data) => {
        // populate the manager card template with the collected data
        const managerCardContent = managerCard(data);
        // create the file named 'profileContent.txt' in the src folder with the manager card content
        // output message upon error
        fs.writeFile(__dirname + '/../src/profileContent.txt', managerCardContent, (err) =>
          err ? console.log(err) : console.log('')
        );
      });
  };
};

// export the class
module.exports = Manager;