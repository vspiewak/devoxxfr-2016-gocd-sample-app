var seleniumServer = require('selenium-server-standalone-jar')
  , chromedriver = require('chromedriver')
  , phantomjs = require('phantomjs-prebuilt');

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
    host : 'localhost',
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
        browserName: 'phantomjs',
        javascriptEnabled: true,
        acceptSslCerts: true,
        'phantomjs.binary.path' : phantomjs.path
      }
    },

    chrome: {
        desiredCapabilities: {
            browserName: 'chrome',
            javascriptEnabled: true,
            acceptSslCerts: true,
            chromeOptions: {
              args: ['--no-sandbox']
            },
            cli_args: {
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
