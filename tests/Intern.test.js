// define the packages needed for the test
const fs = require('fs');
const path = require('path') 
const intern = require('../lib/Intern');

// define the tested module
describe("Intern", () => {
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
        const profile = new intern;
        profile.createProfile();
        // if the function is called, set the functionRunning to true
        if (mock = 'What is the intern\'s name?') {
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
    it("should populate the internCard with the inputted data", () => {
      // define the data input
      const data = {name: 'Jackson', id: '10992', email: 'j10992@gmail.com', school: 'Columbia University'};
      // template for the engineer card
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
      // populate the template with the defined data
      const internCardContent = internCard(data);
      // test that the template is populated with the corresponding data values
      expect(internCardContent).toContain('Jackson' && '10992' && 'j10992@gmail.com' && 'Columbia University');
    });
  });
});