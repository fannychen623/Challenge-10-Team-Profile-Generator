// define the packages needed for the test
const fs = require('fs');
const path = require('path') 
const employee = require('../lib/Employee');

// define the tested module
describe("Employee", () => {
  // define the function tested
  describe("initialize", () => {
    // describe the functionality
    it("should log the welcome message", () => {
      // listen to the console log
      const mock = jest.spyOn(console, "log");
      // empty or silent console log
      mock.mockImplementation(() => {
        // call the function tested
        const profile = new employee;
        profile.create();
        // define the expected output message
        const message = "Welcome to the team generator! \nUse `npm run reset` to reset the dist/folder \n\nPlease build your team";
      // test that the output is as expected
      expect(mock).toBeCalledWith(message);
      });
      // restore the console log
      mock.mockRestore();
    });
  });

  // define the function tested
  describe("create", () => {
    // describe the functionality
    it("should default the role to 'Employee'", () => {
      // listen to the console log
      const mock = jest.spyOn(console, "log");
      // empty or silent console log
      mock.mockImplementation(() => {
        // call the function tested
        const profile = new employee;
        const role = profile.role;
      // test that the output is as expected
      expect(role).toEqual("Employee");
      });
      // restore the console log
      mock.mockRestore();
    });

    // describe the functionality
    it("should start creating profile for the role 'Manager'", () => {
      // listen to the console log
      const mock = jest.spyOn(console, "log");
      // empty or silent console log
      mock.mockImplementation(() => {
        // call the function tested
        const profile = new employee;
        profile.create()
        const role = profile.role;
      // test that the output is as expected
      expect(role).toEqual("Manager");
      });
      // restore the console log
      mock.mockRestore();
    });
  });

  // define the function tested
  describe("next profile", () => {
    // describe the functionality
    it("should default to the role 'Employee' before another role is selected", () => {
      // listen to the console log
      const mock = jest.spyOn(console, "log");
      // empty or silent console log
      mock.mockImplementation(() => {
        // call the function tested
        const profile = new employee;
        profile.nextProfile()
        const role = profile.role;
      // test that the output is as expected
      expect(role).toEqual("Employee");
      });
      // restore the console log
      mock.mockRestore();
    });
  });

  // define the function tested
  describe("add engineer", () => {
    // describe the functionality
    it("should start creating profile for the role 'Engineer'", () => {
      // listen to the console log
      const mock = jest.spyOn(console, "log");
      // empty or silent console log
      mock.mockImplementation(() => {
        // call the function tested
        const profile = new employee;
        profile.addEngineer()
        const role = profile.role;
      // test that the output is as expected
      expect(role).toEqual("Engineer");
      });
      // restore the console log
      mock.mockRestore();
    });
  });

  // define the function tested
  describe("generate team profile", () => {
    // describe the functionality
    it("should set the role to 'None' for profile completion", () => {
      // listen to the console log
      const mock = jest.spyOn(console, "log");
      // empty or silent console log
      mock.mockImplementation(() => {
        // call the function tested
        const profile = new employee;
        profile.generateTeamProfile()
        const role = profile.role;
      // test that the output is as expected
      expect(role).toEqual("None");
      });
      // restore the console log
      mock.mockRestore();
    });

    // describe the functionality
    it("should create a file called 'index.html' in the dist folder", () => {
      // define the file path
      const filePath = path.join(__dirname, "/../dist/index.html")
      // test that the file exist in the path
      expect(fs.existsSync(filePath)).toBe(true);
    });
  });

});