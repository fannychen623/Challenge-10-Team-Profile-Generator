// define the packages needed for the test
const fs = require('fs');
const path = require('path') 
const manager = require('../lib/Manager');

// define the tested module
describe("Manager", () => {
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
        const profile = new manager;
        profile.createProfile();
        // if the function is called, set the functionRunning to true
        if (mock = 'What is the team manager\'s name?') {
          functionRunning = true;
        };
      // test that functionRunning is true
      expect(functionRunning).toEqual(true);
      });
      // restore the console log
      mock.mockRestore();
    });
  });

  // define the function tested
  describe("create profile", () => {
    // describe the functionality
    it("should create a file called 'profileContent.txt' in the src folder", () => {
      // define the file path
      const filePath = path.join(__dirname, "/../src/profileContent.txt")
      // test that the file exist in the path
      expect(fs.existsSync(filePath)).toBe(true);
    });

    // describe the functionality
    it("should populate the managerCard with the inputted data", () => {
      // define the data input
      const data = {name: 'Michael', id: '10574', email: 'm10574@gmail.com', officeNumber: '210'};
      // template for the engineer card
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
      // populate the template with the defined data
      const managerCardContent = managerCard(data);
      // test that the template is populated with the corresponding data values
      expect(managerCardContent).toContain('Michael' && '10574' && 'm10754@gmail.com' && '210');
    });
  });
});