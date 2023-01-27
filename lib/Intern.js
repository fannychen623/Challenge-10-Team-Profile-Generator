// define packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// template for the intern card to be populated on the html file
const internCard = ({name, id, email, school}) =>
      `<div class="col-4">
        <div class="card" style="width: 18rem;">
          <div class="card-body text-white bg-primary mb-3">
            <h2 class="card-title">${name}</h2>
            <h2 class="card-title"><i class="bi-mortarboard-fill"></i> Intern</h2>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${id}</li>
            <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
            <li class="list-group-item">School: ${school}</li>
          </ul>
        </div>
      </div>`;

// define the class to be exported
class Intern {
  // launch inquirer to prompt a series of questions to record data
  createProfile() {
    return inquirer
      .prompt([
        {
          type: 'input',
          message: 'What is the intern\'s name?',
          name: 'name',
        },
        {
          type: 'input',
          message: 'What is the intern\'s id?',
          name: 'id',
        },
        {
          type: 'input',
          message: 'What is the intern\'s email?',
          name: 'email',
        },
        {
          type: 'input',
          message: 'What is the intern\'s school?',
          name: 'school',
        },
      ])
      .then((data) => {
        // populate the manager card template with the collected data
        const internCardContent = internCard(data);
        // append to the file named 'profileContent.txt' in the src folder with the intern card content
        // output message upon error
        fs.appendFile(__dirname + '/../src/profileContent.txt', "\n" + internCardContent, (err) =>
          err ? console.log(err) : console.log('')
        );
      });
  };
};

// export the class
module.exports = Intern;