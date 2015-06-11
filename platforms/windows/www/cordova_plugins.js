cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/parsecomexample.ParsePlugin/www/parse.js",
        "id": "parsecomexample.ParsePlugin.parse",
        "clobbers": [
            "parsePlugin"
        ]
    },
    {
        "file": "plugins/parsecomexample.ParsePlugin/src/windows/ParseProxy.js",
        "id": "parsecomexample.ParsePlugin.ParseProxy",
        "runs": true
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "parsecomexample.ParsePlugin": "0.0.1"
}
// BOTTOM OF METADATA
});