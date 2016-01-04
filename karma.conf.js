module.exports = function(config) {
    config.set({
        frameworks: ['jasmine'],
        basePath : './client/',
        files: [
            'lib/angular/angular.min.js',
            'lib/angular-ui-router/release/angular-ui-router.min.js',
            'lib/angular-cookies/angular-cookies.min.js',
            'lib/angular-resource/angular-resource.min.js',
            'lib/angular-animate/angular-animate.min.js',
            'lib/angular-aria/angular-aria.min.js',
            'lib/angular-messages/angular-messages.min.js',
            'lib/angular-material/angular-material.min.js',
            'lib/angular-mocks/angular-mocks.js',
            'app/sky.module.js',
            'app/sky.config.js',
            'app/sky.constants.js',
            'app/controllers/*.js',
            'app/services/*.js'
        ],
        plugins : [
            'karma-chrome-launcher',
            'karma-jasmine'
        ],
        browsers : ['Chrome']
        });
};
