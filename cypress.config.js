const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    viewportHeight: 1080,
    viewportWidth: 1920,
    e2e: {
      baseUrl: 'https://stage-2.gemfor.me/login',
      specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
      excludeSpecPattern: ['**/1-getting-started/*', '**/2-advanced-examples/*']
    }
  },
});
