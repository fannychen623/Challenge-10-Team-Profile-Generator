const fs = require('fs');
const path = require('path') 
const manager = require('../lib/Manager');

describe("Manager", () => {
  describe("initialize", () => {
    it("should launch the iniquirer prompts", () => {
      const mock = jest.spyOn(console, "log");
      mock.mockImplementation(() => {
        let functionRunning = false;
        const profile = new manager;
        profile.createProfile();
        if (mock = 'What is the team manager\'s name?') {
          functionRunning = true;
        };
      expect(functionRunning).toEqual(true);
      });
      mock.mockRestore();
    });
  });

  describe("create profile", () => {
    it("should create a file called 'profileContent.txt' in the src folder", () => {
      const filePath = path.join(__dirname, "/../src/profileContent.txt")
      expect(fs.existsSync(filePath)).toBe(true);
    });
    it("should populate the managerCard with the inputted data", () => {
      const data = {name: 'Michael', id: '10574', email: 'm10574@gmail.com', officeNumber: '210'};
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
      const managerCardContent = managerCard(data);
      expect(managerCardContent).toContain('Michael' && '10574' && 'm10754@gmail.com' && '210');
    });
  });
});