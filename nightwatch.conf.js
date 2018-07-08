const seleniumServer = require('selenium-server')
const chromedriver = require('chromedriver')
const phantomjs = require('phantomjs-prebuilt')
const argv = require('yargs').argv

if (argv.cucumber) {
  require('nightwatch-cucumber')({
    cucumberArgs: ['--require', 'timeout.js',
      '--require', 'tests/step_definitions',
      '--format', 'pretty',
      '--format', 'json:tests/reports/cucumber.json',
      'tests/features']
  })
}
module.exports = {
  test_workers: false,
  output_folder: 'tests/reports',
  globals_path: 'tests/globals.js',
  page_objects_path: 'tests/pageObjects',
  custom_commands_path: [],
  custom_assertions_path: [],
  selenium: {
    start_process: true,
    server_path: seleniumServer.path,
    log_path: '',
    selenium_host: '127.0.0.1',
    selenium_port: 4444,
    cli_args: {
      'webdriver.chrome.driver': chromedriver.path,
      'webdriver.ie.driver': '',
      'webdriver.firefox.profile': ''
    }
  },
  test_settings: {
    default: {
      launch_url: 'http://store.demoqa.com',
      silent: true,
      disable_colors: false,
      screenshots: {
        enabled: true,
        on_failure: true,
        on_error: false,
        path: './tests/screenshoots'
      },
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true,
        acceptSslCerts: true,
        'phantomjs.binary.path': phantomjs.path
      }
    },
    chrome: {
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true,
        acceptSslCerts: true
      }
    },

    firefox: {
      desiredCapabilities: {
        browserName: 'firefox',
        javascriptEnabled: true,
        acceptSslCerts: true
      }
    },
    phantomjs: {
      desiredCapabilities: {
        browserName: 'phantomjs',
        javascriptEnabled: true,
        acceptSslCerts: true,
        'phantomjs.binary.path': phantomjs.path
      }
    },
    mocha: {
      test_runner: {
        type: 'mocha',
        options: {
          ui: 'bdd',
          reporter: 'list'
        }
      }
    }
  }
}
