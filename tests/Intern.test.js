const fs = require('fs');
const path = require('path') 
const intern = require('../lib/Intern');

describe("Intern", () => {
  describe("initialize", () => {
    it("should launch the iniquirer prompts", () => {
      const mock = jest.spyOn(console, "log");
      mock.mockImplementation(() => {
        let functionRunning = false;
        const profile = new intern;
        profile.createProfile();
        if (mock = 'What is the intern\'s name?') {
          functionRunning = true;
        };
      expect(functionRunning).toEqual(true);
      });
      mock.mockRestore();
    });
  });

  describe("append profile", () => {
    it("should append a file called 'profileContent.txt' in the src folder", () => {
      const filePath = path.join(__dirname, "/../src/profileContent.txt")
      expect(fs.existsSync(filePath)).toBe(true);
    });
    
    it("should populate the internCard with the inputted data", () => {
      const data = {name: 'Jackson', id: '10992', email: 'j10992@gmail.com', school: 'Columbia University'};
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
      const internCardContent = internCard(data);
      expect(internCardContent).toContain('Jackson' && '10992' && 'j10992@gmail.com' && 'Columbia University');
    });
  });
});