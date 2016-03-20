var seleniumServer = require('selenium-server-standalone-jar');
var chromedriver = require('chromedriver');

var launchUrl = (process.env.LAUNCH_URL) ? process.env.LAUNCH_URL : 'http://localhost:3000';

module.exports = {
  src_folders: ['test/e2e'],
  output_folder: '.reports',
  globals_path: 'nightwatch.globals.js',
  test_workers: {
    enabled: true,
    workers: 'auto'
  },

  selenium : {
    start_process : true,
    server_path: seleniumServer.path,
    log_path : '',
    host : '127.0.0.1',
    port : 4444
  },

  test_settings: {
    default: {
      launch_url: launchUrl,
      selenium_port: 4444,
      selenium_host: 'localhost',
      silent: true,
      screenshots: {
        enabled: true,
        on_failure: true,
        on_error: true,
        path: '.screenshots'
      },
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true,
        acceptSslCerts: true
      }
    },

    chrome: {
        desiredCapabilities: {
            browserName: 'chrome',
            javascriptEnabled: true,
            acceptSslCerts: true
        },
        selenium : {
          cli_args : {
            'webdriver.chrome.driver': chromedriver.path
          }
        }
    },

    firefox: {
        desiredCapabilities: {
          browserName: 'firefox',
          javascriptEnabled: true,
          acceptSslCerts: true
        }
    }
  }
};
