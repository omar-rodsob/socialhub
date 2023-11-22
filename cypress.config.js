const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl:'https://socialhub.jobs.personio.de/job/1104809?_pc=1378936#apply'
  },
});
