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

// TODO: Create a function that returns the license link
// If there is no license, return an empty string

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Description
  ${data.description}

  ## Usage
  ${data.usage}

  ## URL to Published Site
  ${data.liveSite}

  ## URL to GitHub Repopository
  ${data.repository}

  ## Credits
  ${data.credits}

  ## License
  ${data.licensure}
  ${renderLicenseBadge()}
  `;
}

module.exports = generateMarkdown;
