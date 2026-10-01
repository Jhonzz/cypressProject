const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    experimentalStudio: true,
    video: true,
    baseUrl: 'http://localhost:3000',
    //   viewportWidth: 1920,
    //   viewportHeight:1080
    //    defaultCommandTimeout: 10000,  Set the default command timeout to 10 seconds
  },
});
