const generateHTML = ({parameters}) =>
    ``;


const htmlContent = generateHTML(parameter);

// write/create the "sampleREADME.md" file and output message upon completion or error
fs.writeFile('index.html', htmlContent, (err) =>
  err ? console.log(err) : console.log('Successfully created index.html file!')
);


module.exports = {

};
