// define packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

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

class Manager {
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
        const managerCardContent = managerCard(data);
        fs.writeFile(__dirname + '/../src/profileContent.txt', managerCardContent, (err) =>
          err ? console.log(err) : console.log('')
        );
      });
  };
};

module.exports = Manager;