// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    const licenseBadges = {
        'Apache 2.0': 'https://opensource.org/licenses/Apache-2.0',
        'GNU v3.0': 'https://www.gnu.org/licenses/gpl-3.0',
        'MIT': 'https://opensource.org/licenses/MIT',
        'BSD 2': 'https://opensource.org/licenses/BSD-2-Clause',
        'BSD 3': 'https://opensource.org/licenses/BSD-3-Clause',
        'Boost 1.0': 'https://www.boost.org/LICENSE_1_0.txt',
        'Creative Commons Zero': 'http://creativecommons.org/publicdomain/zero/1.0/',
        'Eclipse 2.0': 'https://opensource.org/licenses/EPL-1.0)',
    };
    if (licenseBadges.hasOwnProperty(license)){
        return licenseBadges[license]
     } else{
            return '';
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    const licenseLinks = {
        'Apache 2.0': 'https://opensource.org/licenses/Apache-2.0',
        'GNU v3.0': 'https://www.gnu.org/licenses/gpl-3.0',
        'MIT': 'https://opensource.org/licenses/MIT',
        'BSD 2': 'https://opensource.org/licenses/BSD-2-Clause',
        'BSD 3': 'https://opensource.org/licenses/BSD-3-Clause',
        'Boost 1.0': 'https://www.boost.org/LICENSE_1_0.txt',
        'Creative Commons Zero': 'http://creativecommons.org/publicdomain/zero/1.0/',
        'Eclipse 2.0': 'https://opensource.org/licenses/EPL-1.0)',
    };
    if (licenseLinks.hasOwnProperty(license)){
        return licenseLinks[license];
    }else{
            return '';
    
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    const licenseLink= renderLicenseLink(license);
    const licenseBadges= renderedLicenseBadges(license);
    
    if (license){
        return `## License\nThis project is licensed under the [${license} License](${licenseLink}). ${licenseBagdes}`;
    }else{
            return '';
    }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
 
## Description
${data.description}

## Table of Contents
1. [Installation](#installation) 
2. [Usage](#usage)
3. [Contributing](#contributing)
4. [Tests](#tests)
5. [License](#license)
6. [WalkthroughVideo](#walkthroughvideo)
7. [Questions](#questions)


## Usage
${data.usage}

## Contributing
${data.contributing}

## Tests
${data.tests}

## License
${data.license}

## Walkthrough Video
${data.walkthroughVideo}

## Questions
If you have any questions, feel free to contact me on GitHub at [${data.github}](https://github.com/${data.email}).
`;
}

module.exports = generateMarkdown;
