// define packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

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

class Engineer {
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
        const engineerCardContent = engineerCard(data);
        fs.appendFile(__dirname + '/../src/profileContent.txt', "\n" + engineerCardContent, (err) =>
          err ? console.log(err) : console.log('')
        );
      });
  };
};

module.exports = Engineer;