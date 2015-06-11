cordova.define("parsecomexample.ParsePlugin.ParseProxy", function(require, exports, module) { module.exports = {
    initialize: function (successCallback, errorCallback, args) {
        try {
            var res = ParseProxy.ParseProxy.initialize(args[0], args[1]);
            successCallback(res);
        }
        catch (e) {
            errorCallback(e);
        };
    },

    subscribe: function (successCallback, errorCallback, args) {
        try {
            var res = ParseProxy.ParseProxy.subscribe(args[0]);
            successCallback(res);
        }
        catch (e) {
            errorCallback(e);
        };
    },

    trackOpened: function(successCallback, errorCallback) {
        try {
            var res = ParseProxy.ParseProxy.trackOpened();
            successCallback(res);
        }
        catch (e) {
            errorCallback(e);
        };
    }
};

require("cordova/exec/proxy").add("Parse", module.exports);

});
