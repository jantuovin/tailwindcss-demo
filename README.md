# Tailwind CSS demo

Demonstrating usage of Tailwind CSS in a Gatsby project.

## Steps to recreate the project

### 1. Install gatsby-starter-hello-world
    gatsby new gatsby-starter-hello-world https://github.com/gatsbyjs/gatsby-starter-hello-world

### 2. Install Tailwind CSS as a dev-depedency
    npm install tailwindcss --save-dev

### 3. Generate tailwind.config.js
    npx tailwindcss init

### 4. Install Postcss-plugin
    npm install --save gatsby-plugin-postcss

### 5. Include Postcss-plugin to gatsby-config.js
    plugins: [`gatsby-plugin-postcss`,]

### 6. Create postcss.config.js to the project root
    module.exports = () => (
      {
        plugins: [require('tailwindcss'),],
      }
    );

### 7. Add a custom css-file (e.g. ./src/styles/index.css)
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

### 8. Include the custom css-file to the build in gatsby-browser.js:
    import './src/styles/index.css';

### 9. Enable css purging for the build in tailwind.config-js:
    module.exports = {
        purge: ['.src/pages/*.js',],
    }

## Read more
Tailwind CSS: https://tailwindcss.com/  

Include Tailwind CSS to a Gatsby project: https://www.gatsbyjs.org/docs/tailwind-css/

Gatsby starters: https://www.gatsbyjs.org/docs/starters/

gatsby-starter-hello-world: https://www.gatsbyjs.org/starters/gatsbyjs/gatsby-starter-hello-world/