// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === "None"){
    return "";
  }
  return `[![License](https://img.shields.io/badge/License-${license}-blue.svg)](https://opensource.org/licenses/${license})`
}

// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "None"){
    return "";
  }
  return `[License](https://opensource.org/licenses/${license})`;
}

// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "None"){
    return "";
  }
   return `This application is covered under the ${license} license. See the [${license}](${renderLicenseLink(license)}) for details.`;
}

//Generates markdown for README
function generateMarkdown(data) {
  const badge = renderLicenseBadge(data.license);
  const section = renderLicenseSection(data.license);
  
  return `# ${data.title}

## Description
${data.description} ${badge}

## Table of Contents
- [Installation](#installation)
- [Contributing](#contributing)
- [License](#license)
- [Usage](#usage)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Contributing
${data.contributing}

## License
${section}

## Usage
${data.usage}

## Tests
${data.tests}

## Questions
If you have any questions, reach out to me at [GitHub](https://github.com/${data.github}) or via email at ${data.email}.
`;
}

module.exports = generateMarkdown;
