const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('before:browser:launch', (browser = {}, launchOptions) => {
        if (browser.name === 'chrome') {
          launchOptions.args.push('--disable-save-password-bubble');
          launchOptions.args.push('--disable-infobars');
          launchOptions.args.push('--disable-notifications');
          launchOptions.args.push('--disable-extensions');
        }
        return launchOptions;
      });
    },
    baseUrl: 'https://www.saucedemo.com',
    supportFile: 'cypress/support/e2e.js',
    env: {
      username: 'standard_user',
      password: 'secret_sauce'
    }
  }
});
