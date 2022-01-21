// playwright.config.js
// @ts-check


/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
    timeout: 5 * 60 * 1000,
    
    use: {
      screenshot: 'on',
    },

  };
  
  module.exports = config;

  
  