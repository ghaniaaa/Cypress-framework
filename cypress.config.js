// const { defineConfig } = require("cypress");

// module.exports = defineConfig({
//   e2e: {
//     setupNodeEvents(on, config) {
//       // implement node event listeners here
//     }

//   },

// });
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // Cypress configuration settings go here
  // Set to 2 minutes (120000 milliseconds)
  // ... other Cypress configuration settings
  pageLoadTimeout: 12000,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
 
});


