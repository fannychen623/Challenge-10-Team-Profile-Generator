// define packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// template for the engineer card to be populated on the html file
const engineerCard = ({name, id, email, gitHub}) =>
      `<div class="col-4">
        <div class="card" style="width: 18rem;">
          <div class="card-body text-white bg-primary mb-3">
            <h2 class="card-title">${name}</h2>
            <h2 class="card-title"><i class="bi-eyeglasses"></i> Engineer</h2>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${id}</li>
            <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
            <li class="list-group-item">GitHub: ${gitHub}</li>
          </ul>
        </div>
      </div>`;

// define the class to be exported
class Engineer {
  // launch inquirer to prompt a series of questions to record data
  createProfile() {
    return inquirer
      .prompt([
        {
          type: 'input',
          message: 'What is the engineer\'s name?',
          name: 'name',
        },
        {
          type: 'input',
          message: 'What is the engineer\'s id?',
          name: 'id',
        },
        {
          type: 'input',
          message: 'What is the engineer\'s email?',
          name: 'email',
        },
        {
          type: 'input',
          message: 'What is the engineer\'s GitHub?',
          name: 'gitHub',
        },
      ])
      .then((data) => {
        // populate the manager card template with the collected data
        const engineerCardContent = engineerCard(data);
        // append to the file named 'profileContent.txt' in the src folder with the engineer card content
        // output message upon error
        fs.appendFile(__dirname + '/../src/profileContent.txt', "\n" + engineerCardContent, (err) =>
          err ? console.log(err) : console.log('')
        );
      });
  };
};

// export the class
module.exports = Engineer;