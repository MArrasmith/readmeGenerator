// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(value) {
  if (value === 'Apache License') {
    return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licensees/Apache-2.0)';
  } else if (value === 'Boost Software License') {
    return '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
  } else if (value === 'GNU AGPLv3') {
    return '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)';
  } else if (value === 'GNU GPLv3') {
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
  } else if (value === 'GNU LGPLv3') {
    return '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)';
  } else if (value === 'MIT License') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  } else {
    return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
  }
}

//  THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description,
//Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
//  THEN this is displayed as the title of the README
//  THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
//  THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled
//License that explains which license the application is covered under
//  THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
//  THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
//  WHEN I click on the links in the Table of Contents
//  THEN I am taken to the corresponding section of the README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Table of Contents
  1. [Description](#description)
  2. [Installation](#installation)
  3. [Usage](#usage)
  4. [Contributing](#contributing)
  5. [License0](#license)
  6. [Tests](#tests)
  7. [Site and Repository Addresses](#site%20and%20repository%20addresses)
  8. [Questions](#questions)

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributing
  ${data.credits}

  ## License
  ${data.licensure}
  ${renderLicenseBadge()}

  ## Tests
  ${data.tests}

  ## Site and Repository Addresses
  ${data.liveSite}
  ${data.repository}

  ## Questions
  If you have any questions regarding this project, please reach out via GitHub or contact via email.
  [https://github.com/${data.username}]
  Email Address - ${data.email}
  `;
}

module.exports = generateMarkdown;
