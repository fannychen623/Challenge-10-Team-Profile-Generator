
# Module 10 Challenge - Team Profile Generator

>**Application Video:** [Team Profile Generator](https://drive.google.com/)
>
>**View:** [Description](#description) / [Application Details](#application-details) / [Application Sample README File](#application-sample-file)
>
>**Application Preview:**
>
>![Team Profile Generator](/assets/ "Team Profile Generator")
> 
>![Terminal Output](/assets/ "Terminal Output")
> 

## **DESCRIPTION**
> Topic Assessed: **Node.js** - **Object-Oriented Programming (OOP), Test-Driven Coding (jest)**
### **My Task**
*Team Profile Generator* allows a user to use node to automate the process of generating a team profile HTML.
> Install dependencies to run the application.
> 
> Use inquirer to ask a series of prompts to collect data.
> 
## User Story
```
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
```
## Acceptance Criteria

```
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
```

## **APPLICATION DETAILS**

### index.js Information
* **require**: Define packages needed for the application.
* **profile**: Call the module and function to initialize the application.

### Employee.js Information
* **require**: Define packages needed for the application.
* **class Profile**: Class exported to run the application with index.js.
  * `constructor` - define the default role of class.
  * `create()` - log the starting message of the application and call the manager module to start recording data for the profiles.
    * After completion, call the `nextProfile()` fuction.
  * `nextProfile()` - uses the inquirer package to launch a prompt to determine if more profiles are to be added.
    * Based on the response, call the respective functions: `addEngineer()`, `addIntern()`, or `generateTeamProfile()`.
  * `addEngineer()` - set the current role to 'Engineer' and call the engineer module
    * After completion, call the `nextProfile()` fuction.
  * `addIntern()` - set the current role to 'Intern' and call the intern module
    * After completion, call the `nextProfile()` fuction.
  * `generateTeamProfile()` - set the current role to 'None' and call the generate module to generate the html page for the profiles.
* **module.exports**: Export the class.

### Manager.js/Engineer.js/Intern.js Information
* **require**: Define packages needed for the application.
  * `inquirer` and `fs`
* **card = ({parameters})**: Define the template used to populate with the recorded data.
  * Template either written or appened to `profileContent.txt` file.
  * To be passed into the html file at the end.
* **class Manager/Engineer/Intern**: Class exported to run the application with Employee.js.
  * `createProfile()` - launch inquirer and output data.
    * `inquirer` - uses the launch a series of prompt to collect employee data.
      * Universal properties: `name`, `id`, `email`
      * Unique properties: 
        * Manager: `officeNumber`
        * Engineer: `gitHub`
        * Intern: `school`
    * Pass the data into the card template
    * Use the `fs` package to write ('Manager') or append ('Engineer'/'Intern') the `profileContent.txt` file into the src folder.
* **module.exports**: Export the class.

### generateProfile.js Information
* **require**: Define packages needed for the application.
  * `fs`
* **htmlTemp**: Define the template used to populate with the profile data and generate the html file.
* **class generateProfile**: Class exported to run the application with Employee.js.
  * `createPage()` - read the profileContent.txt file and write the html file.
    * Use `fs.readFileSync` to read the `profileContent.txt` file and set it as `profileData`
    * Populate the html template with the data and define as `htmlContent`
    * Use the `fs.writeFile` to write the `index.html` file into the dist folder.
* **module.exports**: Export the class.

### Employee.test.js Information
* **require**: Define packages needed for the application.
  * `fs`, `path`, and `Employee.js`
* **initialize**: Test that the function was properly initialized/called.
  * Silent the console log with `mock = jest.spyOn(console, "log")`, `mock.mockImplementation(() => {...})`, and `mock.mockRestore()`.
  * Define the expected output message at initialization
  * Use the mock functions to listen to the console log activity.
  * Check that the expected message is outputed.
* **expect(role).toEqual('')**: Check that the role for each function called is the correct role of the respective function.
  * `profile`: role - 'Employee'
  * `profile.create()`: role - 'Manager'
  * `profile.nextProfile()`: role - 'Employee'
  * `profile.addEngineer()`: role - 'Engineer'
  * `profile.addIntern()`: role - 'Intern'
  * `profile.generateTeamProfile()`: role - 'None'
* **generate team profile**: Test that the profile was properly created.
  * Use the `path` package to define the path of the file.
  * Use `fs.existSync` to check that the `index.html` file exist in the defined path.

### Manager.test.js/Engineer.test.js/Intern.test.js Information
* **require**: Define packages needed for the application.
  * `fs`, `path`, and the respective local packages
* **initialize**: Test that the function was properly initialized/called.
  * Silent the console log with `mock = jest.spyOn(console, "log")`, `mock.mockImplementation(() => {...})`, and `mock.mockRestore()`.
  * Define the variable `functionRunning` to false.
  * Call the respective functions from their modules.
  * If a prompt was logged, set `functionRunning` to true.
  * Check that `functionRunning` is true
* **create profile**: Test that the profile was properly created.
  * Use the `path` package to define the path of the file.
  * Use `fs.existSync` to check that the `profileContent.txt` file exist.
  * Define a set of profile data to be populated into the defined template.
  * Populate the template and check that the content contains the correct data parameters.

### package.json Information
* **package**: Define the dependencies/packages used in the application.
  * Dependencies: `inquirer`, version 8.2.4
  * devDependencies: `jest`, version ^24.8.0

## **APPLICATION SAMPLE FILE**
### Sample HTML Page
>![Sample HTML Page](./assets/ "Sample HTML Page")