// function to generate markdown for README
function generateMarkdown(data) {
  
  return `# ${data.githubUser}

  ![badge](https://img.shields.io/badge/license-${data.license}-blue)

`;
}

module.exports = generateMarkdown;
