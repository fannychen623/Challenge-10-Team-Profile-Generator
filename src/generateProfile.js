const fs = require('fs');

const htmlTemp = (profileContent) =>
  `<!DOCTYPE html>
  <html lang="en">
    <!-- link local assets, stylesheet cdn's (bootstrap), and define the title -->
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <link rel="stylesheet" href="./css/reset.css" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"/>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css">
      <link rel="stylesheet" href="./css/style.css" />
      <title>Team Profile</title>
    </head>
  
    <body>
      <!-- header with application title -->
      <header>
        <h1>My Team</h1>
      </header>
  
      <main>
        <div class="container">
          <div class="row justify-content-center">
            <!-- team member profile cards -->
            ${profileContent}
          </div>
        </div>
      </main>
    </body>
  </html>`;

class generateProfile {
  createPage() {
    const profileData = fs.readFileSync(__dirname + '/profileContent.txt', 'utf8')
    const htmlContent = htmlTemp(profileData);
    // write/create the "sampleREADME.md" file and output message upon completion or error
    fs.writeFile(__dirname + '/../dist/index.html', htmlContent, (err) =>
      err ? console.log(err) : console.log('Successfully created Team Profile!')
    );
  };
};

module.exports = generateProfile;
