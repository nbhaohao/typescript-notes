"use strict";
exports.__esModule = true;
var Model = /** @class */ (function () {
    function Model(events, sync, attributes) {
        this.events = events;
        this.sync = sync;
        this.attributes = attributes;
    }
    Object.defineProperty(Model.prototype, "on", {
        get: function () {
            return this.events.on;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Model.prototype, "trigger", {
        get: function () {
            return this.events.trigger;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Model.prototype, "get", {
        get: function () {
            return this.attributes.get;
        },
        enumerable: true,
        configurable: true
    });
    Model.prototype.set = function (update) {
        this.attributes.set(update);
        this.trigger("change");
    };
    Model.prototype.fetch = function () {
        var _this = this;
        var id = this.get("id");
        if (typeof id !== "number") {
            throw new Error("Cannot fetch without an id");
        }
        this.sync.fetch(id).then(function (response) {
            _this.set(response.data);
        });
    };
    Model.prototype.save = function () {
        var _this = this;
        this.sync
            .save(this.attributes.getAll())
            .then(function (response) {
            _this.trigger("save");
        })["catch"](function () {
            _this.trigger("error");
        });
    };
    return Model;
}());
exports.Model = Model;
