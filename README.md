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

## HOW TO INSTALL

``` shell
git clone

npm install

bower install
```

## HOW TO RUN THE APP

``` shell
node .

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
* Add database.
* Add cucumber.js
* Improve design

Thanks
Luis
