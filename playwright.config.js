// playwright.config.js
// @ts-check


/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
    timeout: 5 * 60 * 200,
    
    use: {
      screenshot: "only-on-failure",
      headless: false,
    },

  };
  
  module.exports = config;

  
  