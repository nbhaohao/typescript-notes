"use strict";
exports.__esModule = true;
var Eventing = /** @class */ (function () {
    function Eventing() {
        var _this = this;
        this.events = {};
        this.on = function (eventName, callback) {
            var handlers = _this.events[eventName] || [];
            _this.events[eventName] = handlers.concat(callback);
        };
        this.trigger = function (eventName) {
            var handlers = _this.events[eventName];
            if (!handlers || handlers.length === 0) {
                return;
            }
            handlers.forEach(function (callback) { return callback(); });
        };
    }
    return Eventing;
}());
exports.Eventing = Eventing;
