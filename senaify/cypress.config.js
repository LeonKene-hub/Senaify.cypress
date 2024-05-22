const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    testIsolation : false,
    reactNativeHotReload: false,
    viewportHeight:896,
    viewportWidth:414,
    baseUrl : "http://localhost:8081"
  },
});
