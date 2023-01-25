const generateCSS = ({parameters}) =>
    ``;


const cssContent = generateCSS(parameter);

// write/create the "sampleREADME.md" file and output message upon completion or error
fs.writeFile('style.css', cssContent, (err) =>
  err ? console.log(err) : console.log('Successfully created style.css file!')
);


module.exports = {

};
