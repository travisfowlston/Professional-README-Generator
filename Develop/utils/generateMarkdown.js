// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
  } else if (license === "Apache 2.0") {
    return "![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)";
  } else if (license === "GNU GPLv3") {
    return "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)";
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "MIT") {
    return "This application is covered under the [MIT License](https://opensource.org/licenses/MIT).";
  } else if (license === "Apache 2.0") {
    return "This application is covered under the [Apache 2.0 License](https://opensource.org/licenses/Apache-2.0).";
  } else if (license === "GNU GPLv3") {
    return "This application is covered under the [GNU GPLv3 License](https://www.gnu.org/licenses/gpl-3.0).";
  } else if (license === "None") {
    return "There is no license for this project.";
  }
}

module.exports = {
  renderLicenseBadge,
  renderLicenseSection,
};
