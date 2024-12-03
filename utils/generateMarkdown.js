import validator from "validator";

// Licenses badge and text info for generating the markdown
// Exported to allow for inquirer to utilize the id and selector as choices
export const licenses = [
  {id: 'apache', selector: 'Apache 2.0 License', niceText: 'the Apache 2.0 License', badge: '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]', link:'https://opensource.org/licenses/Apache-2.0'},
  {id: 'boost', selector: 'Boost Software License 1.0', niceText: 'the Boost Software License 1.0', badge: '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)]', link:'https://www.boost.org/LICENSE_1_0.txt'},
  {id: 'bsd3', selector: 'BSD 3-Clause License', niceText: 'the BSD 3-Clause License', badge: '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)]', link:'https://opensource.org/licenses/BSD-3-Clause'},
  {id: 'bsd2', selector: 'BSD 2-Clause License', niceText: 'the BSD 2-Clause License', badge: '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)]', link:'https://opensource.org/licenses/BSD-2-Clause'},
  {id: 'cc0', selector: 'CC: CC0', niceText: 'the Creative Commons CC0 license', badge: '[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)]', link:'http://creativecommons.org/publicdomain/zero/1.0/'},
  {id: 'cca', selector: 'CC: Attribution 4.0 International', niceText: 'the Creative Commons Attribution 4.0 International license', badge: '[![License: CC BY 4.0](https://img.shields.io/badge/License-CC_BY_4.0-lightgrey.svg)]', link:'https://creativecommons.org/licenses/by/4.0/'},
  {id: 'ccas', selector: 'CC: Attribution-ShareAlike 4.0 International', niceText: 'the Creative Commons Attribution-ShareAlike 4.0 International license', badge: '[![License: CC BY-SA 4.0](https://img.shields.io/badge/License-CC_BY--SA_4.0-lightgrey.svg)]', link:'https://creativecommons.org/licenses/by-sa/4.0/'},
  {id: 'ccanc', selector: 'CC: Attribution-NonCommercial 4.0 International', niceText: 'the Creative Commons Attribution-NonCommercial 4.0 International license', badge: '[![License: CC BY-NC 4.0](https://img.shields.io/badge/License-CC_BY--NC_4.0-lightgrey.svg)]', link:'https://creativecommons.org/licenses/by-nc/4.0/'},
  {id: 'ccand', selector: 'CC: Attribution-NoDerivates 4.0 International', niceText: 'the Creative Commons Attribution-NoDerivates 4.0 International license', badge: '[![License: CC BY-ND 4.0](https://img.shields.io/badge/License-CC_BY--ND_4.0-lightgrey.svg)]', link:'https://creativecommons.org/licenses/by-nd/4.0/'},
  {id: 'ccancs', selector: 'CC: Attribution-NonCommercial-ShareAlike 4.0 International', niceText: 'the Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International license', badge: '[![License: CC BY-NC-SA 4.0](https://img.shields.io/badge/License-CC_BY--NC--SA_4.0-lightgrey.svg)]', link:'https://creativecommons.org/licenses/by-nc-sa/4.0/'},
  {id: 'eclipse', selector: 'Eclipse Public License 1.0', niceText: 'the Eclipse Public License 1.0', badge: '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)]', link:'https://opensource.org/licenses/EPL-1.0'},
  {id: 'gnugpl3', selector: 'GNU GPL v3', niceText: 'the GNU GPL v3 license', badge: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]', link:'https://www.gnu.org/licenses/gpl-3.0'},
  {id: 'gnugpl2', selector: 'GNU GPL v2', niceText: 'the GNU GPL v2 license', badge: '[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)]', link:'https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html'},
  {id: 'gnuagpl', selector: 'GNU AGPL v3', niceText: 'the GNU AGPL v3 license', badge: '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)]', link:'https://www.gnu.org/licenses/agpl-3.0'},
  {id: 'gnulgpl', selector: 'GNU LGPL v3', niceText: 'the GNU LGPL v3 license', badge: '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)]', link:'https://www.gnu.org/licenses/lgpl-3.0'},
  {id: 'gnufdl', selector: 'GNU FDL v1.3', niceText: 'the GNU FDL v1.3 license', badge: '[![License: FDL 1.3](https://img.shields.io/badge/License-FDL_v1.3-blue.svg)]', link:'https://www.gnu.org/licenses/fdl-1.3'},
  {id: 'oes21', selector: 'OES: The Hippocratic License 2.1', niceText: 'The Hippocratic License 2.1 from The Organization for Ethical Source', badge: '[![License: Hippocratic 2.1](https://img.shields.io/badge/License-Hippocratic_2.1-lightgrey.svg)]', link:'https://firstdonoharm.dev'},
  {id: 'oes30', selector: 'OES: The Hippocratic License 3.0', niceText: 'The Hippocratic License 3.0 from The Organization for Ethical Source', badge: '[![License: Hippocratic 3.0](https://img.shields.io/badge/License-Hippocratic_3.0-lightgrey.svg)]', link:'https://firstdonoharm.dev'},
  {id: 'ibm', selector: 'IBM Public License Version 1.0', niceText: 'the IBM Public License Version 1.0', badge: '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)]', link:'https://opensource.org/licenses/IPL-1.0'},
  {id: 'isc', selector: 'ISC License (ISC)', niceText: 'the ISC License (ISC)', badge: '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)]', link:'https://opensource.org/licenses/ISC'},
  {id: 'mit', selector: 'The MIT License', niceText: 'The MIT License', badge: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]', link:'https://opensource.org/licenses/MIT'},
  {id: 'mozilla', selector: 'Mozilla Public License 2.0', niceText: 'the Mozilla Public License 2.0', badge: '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]', link:'https://opensource.org/licenses/MPL-2.0'},
  {id: 'odcby', selector: 'ODC: Attibution License (BY)', niceText: 'the Open Data Commons Attibution License (BY)', badge: '[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)]', link:'https://opendatacommons.org/licenses/by/'},
  {id: 'odcodbl', selector: 'ODC: Open Database License (ODbL)', niceText: 'the Open Data Commons Open Database License (ODbL)', badge: '[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)]', link:'https://opendatacommons.org/licenses/odbl/'},
  {id: 'odcpddl', selector: 'ODC: Public Domain Dedication and License (PDDL)', niceText: 'the Open Data Commons Public Domain Dedication and License (PDDL)', badge: '[![License: ODbL](https://img.shields.io/badge/License-PDDL-brightgreen.svg)]', link:'https://opendatacommons.org/licenses/pddl/'},
  {id: 'perl', selector: 'Perl: The Perl License', niceText: 'The Perl License', badge: '[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)]', link:'https://opensource.org/licenses/Artistic-2.0'},
  {id: 'perla', selector: 'Perl: The Artistic License 2.0', niceText: 'The Artistic License 2.0 from Perl', badge: '[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic_2.0-0298c3.svg)]', link:'https://opensource.org/licenses/Artistic-2.0'},
  {id: 'sil', selector: 'SIL Open Font License 1.1', niceText: 'the SIL Open Font License 1.1', badge: '[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg)]', link:'https://opensource.org/licenses/OFL-1.1'},
  {id: 'unl', selector: 'The Unlicense', niceText: 'the Unlicense', badge: '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)]', link:'http://unlicense.org/'},
  {id: 'wtfpl', selector: 'WTFPL', niceText: 'The Do What the Fuck You Want to Public License', badge: '[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)]', link:'http://www.wtfpl.net/about/'},
  {id: 'zlib', selector: 'Zlib', niceText: 'the zlib/libpng License', badge: '[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)]', link:'https://opensource.org/licenses/Zlib'}
]

// Returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return license ? license.badge : '';  
}

// Returns the license link from the provided license
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return license ? license.link : '';  
}

// Returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    const knownLicense = licenses.find(item => item.id == license);

    if (!knownLicense) {
      return '';
    }

    return `## License\n\nThis project is governed by ${knownLicense.niceText}. For more information, click or tap on the badge below.\n\n${renderLicenseBadge(knownLicense)}(${renderLicenseLink(knownLicense)})\n\n`;
}

// Returns the description section of the README
function renderDescriptionSection(description) {
  return `${description}\n\n`;
}

// Returns the table of contents for the README
// Only creates the optional sections if data is present
function renderTableOfContents(data) {
  let toc = '## Table of Contents\n\n';

  if (!validator.isEmpty(data.installation)) {
    toc += '- [Installation](#installation)\n';
  }

  if (!validator.isEmpty(data.usage)) {
    toc += '- [Usage](#usage)\n';
  }

  if (!validator.isEmpty(data.contributing)) {
    toc += '- [Contributing](#contributing)\n';
  }

  if (!validator.isEmpty(data.testing)) {
    toc += '- [Testing](#testing)\n';
  }

  toc += '- [License](#license)\n- [Questions](#questions)\n\n';

  return toc;
}

// Returns the titled segment if any text is provided, or an empty string if not
function renderOptionalSection(section, text) {
  return validator.isEmpty(text) ? '' : `## ${section}\n\n${text}\n\n`;
}

// Returns the Installation section if provided
function renderInstallationSection(installation) {
  return renderOptionalSection("Installation", installation);
}

// Returns the Usage section if provided
function renderUsageSection(usage) {
  return renderOptionalSection("Usage", usage);
}

// Returns the Contributing if provided
function renderContributingSection(contibuting) {
  return renderOptionalSection("Contributing", contibuting);
}

// Returns the Testing section if provided
function renderTestingSection(testing) {
  return renderOptionalSection("Testing", testing);
}

// Creates text for the Questions section based on the provided information
function renderQuestionsSection(username, email) {
  return `## Questions\n\nI can be reached with questions at https://www.github.com/${username} or via email at ${email}.\n\n`;
}

// Generates all the markdown for README using the above functions
function generateMarkdown(data) {
  return `# ${data.title}\n\n${renderDescriptionSection(data.description)}${renderTableOfContents(data)}${renderInstallationSection(data.installation)}${renderUsageSection(data.usage)}${renderContributingSection(data.contributing)}${renderTestingSection(data.testing)}${renderLicenseSection(data.license)}${renderQuestionsSection(data.gitHub, data.email)}#### This README.md file was generated with the ReadmeGenerator located at https://www.github.com/Prelle/ReadmeGenerator.`;
}

export default generateMarkdown;
