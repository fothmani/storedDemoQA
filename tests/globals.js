var reporter = require('cucumber-html-reporter')
var options = {
  theme: 'bootstrap',
  jsonFile: 'tests/reports/cucumber.json',
  output: 'tests/reports/report.html',
  reportSuiteAsScenarios: true,
  launchReport: false,
  metadata: {
    'App Version': '1.0.0',
    'Browser': 'Chrome  67.0.3396.99',
    'Platform': 'Ubuntu 16.05',
    'Executed By': '@fothmani',
    'Executed': 'Local'
  }
}

reporter.generate(options)

module.exports = {
  reporter: function (results, done) {
    reporter.fn(results, done)
    done()
  },
  // Abord all on test fail
  abortOnAssertionFailure: true,

  // Duration between two checks
  waitForConditionPollInterval: 500,

  // Timeout duration
  waitForConditionTimeout: 5000,

  /*
           * Define if the test failed when many HTML elements are found when
           * we expect only one
           */
  throwOnMultipleElementsReturned: false,

  // Before/After Hooks of all tests
  before: (next) => next(),
  after: (next) => next(),

  // Before/After Hooks of test suites
  beforeEach: (browser, next) => next(),
  afterEach: (browser, next) => next()
}
