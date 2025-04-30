const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Test Report',
    embeddedScreenshots: true,
    inlineAssets: true
  },
  e2e: {
    baseUrl: 'https://automationexercise.com',
    setupNodeEvents(on, config) {
      require ('cypress-mochawesome-reporter/plugin')(on)
    },
  },
});