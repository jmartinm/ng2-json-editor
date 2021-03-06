// Karma configuration file, see link for more information
// https://karma-runner.github.io/0.13/config/configuration-file.html
 
// process.env.TRAVIS ? PhantomJS : Chrome is for running tests on PhantomJS for TRAVIS
module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', 'angular-cli'],
    plugins: [
      require('karma-jasmine'),
      process.env.TRAVIS ? require('karma-phantomjs-launcher') : require('karma-chrome-launcher'),
      require('karma-remap-istanbul'),
      require('angular-cli/plugins/karma')
    ],
    files: [
      { pattern: './example/test.ts', watched: false }
    ],
    preprocessors: {
      './example/test.ts': ['angular-cli']
    },
    remapIstanbulReporter: {
      reports: {
        html: 'coverage',
        lcovonly: './coverage/coverage.lcov'
      }
    },
    angularCli: {
      config: './angular-cli.json',
      environment: 'dev'
    },
    reporters: ['progress', 'karma-remap-istanbul'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: process.env.TRAVIS ? ['PhantomJS'] : ['Chrome'],
    singleRun: false
  });
};
