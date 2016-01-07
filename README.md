# SKY TEST

## TECHNOLOGIES

Frontend:
* AngularJs 1.4
* Angular Material
* Jasmine

Backend:
* NodeJs
* Hapi
* Protactor

Documentation based in jsdoc.

## REQUIREMENTS

APP:
* npm
* bower

TESTING:

Protractor:
``` shell
npm install -g protractor

webdriver-manager update

webdriver-manager start
```

* The webdriver-manager needs to be started, otherwise the tests won't work.

To stop the driver use the following url:
http://localhost:4444/selenium-server/driver/?cmd=shutDownSeleniumServer

## HOW TO INSTALL

``` shell
git clone https://github.com/lnolazco/skytest.git

cd skytest

npm install

bower install
```

## HOW TO RUN THE APP

Execute:
``` shell
node .
```
Open page in the browser:
``` shell
localhost:3000
```

## HOW TO RUN THE TESTS

Unit tests [Jasmine]:
``` shell
karma starts karma.conf.js
```
End to end [Protractor]:
``` shell
protractor e2e/conf.js
```

## THINGS TO IMPROVE
* Add database
* Add cucumber.js
* Improve design
* Add automatic task manager (grunt, gulp)
* Add testing for backend hapi

Luis
