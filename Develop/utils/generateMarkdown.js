// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    console.log(license)
    license = license.split(" ").join("%20")
    console.log(license)
    return `![License](https://img.shields.io/badge/License-${license}-blue.svg)`;
  }
  return ""
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None") {
    return `\n * [License](#license) \n`;
  } 
  return ""
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return `## License
    
    This project is licensed under ${license} license.`;
  }
  return ""
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description 

  ${data.description}

  ## Table of Contents

  * [Installation](#installation)

  * [Usage](#usage)

${renderLicenseLink(data.license)}

  * [Contributing](#contributing)

  * [Tests](#tests)

  * [Questions](#questions)
  
  ## Installation

  To install necessary depedencies run the following command:
  ${data.installation}

  ## Usage

  ${data.usage}

  ${renderLicenseSection(data.license)}

  ## Contributing 

  ${data.contributing}

  ## Test

  To run tests run the following command:
  ${data.test}

  ## Questions

  If you have questions about the app contact me at:
  ${data.email}
  You can find more of my work at:
  [${data.github}](https://github.com/${data.github}).
`;
}

module.exports = generateMarkdown;
