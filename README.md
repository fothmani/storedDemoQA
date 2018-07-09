# StoredDemoQA

Frameworks used are: 

https://github.com/nightwatchjs/nightwatch

https://github.com/mucsi96/nightwatch-cucumber

## Setup

First you need to install Node.js (https://nodejs.org/en/) and Java.

Then...

```sh
$ git clone https://github.com/fothmani/storedDemoQA.git
$ cd storeDemoQA
$ npm install
```

## Run Tests

I have created 2 scripts.
One is for running e2e tests by running the following command
```sh
 npm run e2e-test
```
And the other one is to check eslint standard rules for syntax quality by running
```
sh npm run lint
```

## Project hierarchy

This project is composed to 3 main sections with a configuration file.

Features folder: Where I write my scenarios using BDD approach with Cucumber

PageObjects: An adiitional layer of abstraction to make the test more readable and maitainable

Step_definitions: In order to match and automate the scenario in feature file using nightwatch framework

`nighwatch.conf.js`: a global config for the the project. In this file:

under test_settings --> default --> desiredCapabilities --> browserName  you can change the value to chrome or firefox to change the browser

In addition, there are two other folders screenshots and reports. The first one is used for screenshots capture and the second one is for generating report.


### reports
#### for cucumber
under tests\reports will be a HTML Report created after each cucumber test run.
