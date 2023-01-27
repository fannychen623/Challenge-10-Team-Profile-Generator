const fs = require('fs');
const path = require('path') 
const engineer = require('../lib/Engineer');

describe("Engineer", () => {
  describe("initialize", () => {
    it("should launch the iniquirer prompts", () => {
      const mock = jest.spyOn(console, "log");
      mock.mockImplementation(() => {
        let functionRunning = false;
        const profile = new engineer;
        profile.createProfile();
        if (mock = 'What is the engineer\'s name?') {
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
      const data = {name: 'Simone', id: '10782', email: 's10782@gmail.com', gitHub: 'sim10782'};
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
      const engineerCardContent = engineerCard(data);
      expect(engineerCardContent).toContain('Simone' && '10782' && 's10782@gmail.com' && 'sim10782');
    });
  });
});