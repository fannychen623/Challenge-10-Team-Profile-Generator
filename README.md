
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
  * `inquirer` and `fs`.

### generateHTML.js Information
* **require**: Define packages needed for the application.
  * `inquirer` and `fs`.

### package.json Information
* **package**: Define the dependencies/packages used in the application.
  * Dependencies: `inquirer`, version 8.2.4

## **APPLICATION SAMPLE FILE**
### Sample HTML Page
>![Sample HTML Page](./assets/ "Sample HTML Page")