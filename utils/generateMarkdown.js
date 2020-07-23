// function & literal
function generateMarkdown(data) {
    return `

# ${data.projectName}

## Summary
![badge](https://img.shields.io/badge/license-${data.license}-blue)<br />
${data.summary}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Functionality
${data.functionality}

## Credits
${data.credits}

## License
This application is covered by the ${data.license} license. 
<br />
![badge](https://img.shields.io/badge/license-${data.license}-blue)

## Tests
${data.testFunctions}

## Questions
Follow me on Github: [${data.user}](https://github.com/${data.user})
<br />
<br />
Email me with any questions: ${data.email}
`;
}

module.exports = generateMarkdown;