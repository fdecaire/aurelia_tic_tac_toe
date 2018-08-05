"use strict";
exports.__esModule = true;
function configure(aurelia) {
    aurelia.use.basicConfiguration();
    aurelia.start().then(function () { return aurelia.setRoot(); });
}
exports.configure = configure;
