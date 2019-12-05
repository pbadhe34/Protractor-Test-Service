exports.config = {
  framework: 'jasmine',
  capabilities: {
    /*
     browserName: 'chrome',

     chromeOptions: {
       args: [ '--headless', '--disable-gpu', '--window-size=800,600' ]
     }
     */

  },

  specs: [
    // 'Api-Test-Spec.js',
    'specCustomerPage.js'
  ],

  directConnect: true,

  // You could set no globals to true to avoid jQuery '$' and protractor '$'
  // collisions on the global namespace.
  noGlobals: true,
  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 50000,
    isVerbose: true,
    includeStackTrace: true

  }

}
