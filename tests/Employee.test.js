const fs = require('fs');
const path = require('path') 
const employee = require('../lib/Employee');

describe("Employee", () => {
  describe("initialize", () => {
    it("should log the welcome message", () => {
      const mock = jest.spyOn(console, "log");
      mock.mockImplementation(() => {
        const profile = new employee;
        profile.create();
        const message = "Welcome to the team generator! \nUse `npm run reset` to reset the dist/folder \n\nPlease build your team";
      expect(mock).toBeCalledWith(message);
      });
      mock.mockRestore();
    });
  });

  describe("create", () => {
    it("should default the role to 'Employee'", () => {
      const mock = jest.spyOn(console, "log");
      mock.mockImplementation(() => {
        const profile = new employee;
        const role = profile.role;
      expect(role).toEqual("Employee");
      });
      mock.mockRestore();
    });
  });

  describe("create", () => {
    it("should start creating profile for the role 'Manager'", () => {
      const mock = jest.spyOn(console, "log");
      mock.mockImplementation(() => {
        const profile = new employee;
        profile.create()
        const role = profile.role;
      expect(role).toEqual("Manager");
      });
      mock.mockRestore();
    });
  });

  describe("next profile", () => {
    it("should default to the role 'Employee' before another role is selected", () => {
      const mock = jest.spyOn(console, "log");
      mock.mockImplementation(() => {
        const profile = new employee;
        profile.nextProfile()
        const role = profile.role;
      expect(role).toEqual("Employee");
      });
      mock.mockRestore();
    });
  });

  describe("add engineer", () => {
    it("should start creating profile for the role 'Engineer'", () => {
      const mock = jest.spyOn(console, "log");
      mock.mockImplementation(() => {
        const profile = new employee;
        profile.addEngineer()
        const role = profile.role;
      expect(role).toEqual("Engineer");
      });
      mock.mockRestore();
    });
  });

  describe("generate team profile", () => {
    it("should set the role to 'None' for profile completion", () => {
      const mock = jest.spyOn(console, "log");
      mock.mockImplementation(() => {
        const profile = new employee;
        profile.generateTeamProfile()
        const role = profile.role;
      expect(role).toEqual("None");
      });
      mock.mockRestore();
    });

    it("should create a file called 'index.html' in the dist folder", () => {
      const filePath = path.join(__dirname, "/../dist/index.html")
      expect(fs.existsSync(filePath)).toBe(true);
    });
  });

});