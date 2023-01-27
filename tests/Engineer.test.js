// define the packages needed for the test
const fs = require('fs');
const path = require('path') 
const engineer = require('../lib/Engineer');

// define the tested module
describe("Engineer", () => {
  // define the function tested
  describe("initialize", () => {
    // describe the functionality
    it("should launch the iniquirer prompts", () => {
      // listen to the console log
      const mock = jest.spyOn(console, "log");
      // empty or silent console log
      mock.mockImplementation(() => {
        // define and set functionRunning to false
        let functionRunning = false;
        // call the function tested
        const profile = new engineer;
        profile.createProfile();
        // if the function is called, set the functionRunning to true
        if (mock = 'What is the engineer\'s name?') {
          functionRunning = true;
        };
      // test that functionRunning is true
      expect(functionRunning).toEqual(true);
      });
      mock.mockRestore();
    });
  });

  // define the function tested
  describe("append profile", () => {
    // describe the functionality
    it("should append a file called 'profileContent.txt' in the src folder", () => {
      // define the file path
      const filePath = path.join(__dirname, "/../src/profileContent.txt")
      // test that the file exist in the path
      expect(fs.existsSync(filePath)).toBe(true);
    });

    // describe the functionality
    it("should populate the engineerCard with the inputted data", () => {
      // define the data input
      const data = {name: 'Simone', id: '10782', email: 's10782@gmail.com', gitHub: 'sim10782'};
      // template for the engineer card
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
            <li class="list-group-item">GitHub: <a href="https://github.com/${gitHub}">${gitHub}</a></li>
          </ul>
        </div>
      </div>`;
      // populate the template with the defined data
      const engineerCardContent = engineerCard(data);
      // test that the template is populated with the corresponding data values
      expect(engineerCardContent).toContain('Simone' && '10782' && 's10782@gmail.com' && 'sim10782');
    });
  });
});