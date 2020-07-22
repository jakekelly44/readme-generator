// // function to generate markdown for README
// function generateMarkdown(data) {
//   return `# ${data.title}

// `;
// }

// module.exports = generateMarkdown;

// generateReadme function populating the README.md
function generateMarkdown(answers) {
    return `
# ${answers.projectTitle}

## Description
![badge](https://img.shields.io/badge/license-${answers.license}-blue)<br />
${answers.description}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
This application is covered by the ${answers.license} license. 
<br />
![badge](https://img.shields.io/badge/license-${answers.license}-blue)

## Contributions
${answers.contributing}

## Tests
${answers.tests}

## Questions
Follow me on Github: [${answers.username}](https://github.com/${answers.username})<br />
<br />
Email me with any questions: ${answers.email}
`;
}

module.exports = generateMarkdown;