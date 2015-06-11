var exec = require('cordova/exec');

var parse = {
    initialize: function(appId, clientKey, successCallback, errorCallback) {
        exec(
            successCallback,
            errorCallback,
            'Parse',
            'initialize',
            [appId, clientKey]
        );
    },

    subscribe: function(channel, successCallback, errorCallback) {
        exec(
            successCallback,
            errorCallback,
            'Parse',
            'subscribe',
            [channel]
        );
    },

    trackOpened: function(successCallback, errorCallback) {
        exec(
            successCallback,
            errorCallback,
            'Parse',
            'trackOpened',
            []
        );
    }
}

module.exports = parse;
