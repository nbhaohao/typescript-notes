"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var Sync = /** @class */ (function () {
    function Sync(rootUrl) {
        this.rootUrl = rootUrl;
    }
    Sync.prototype.fetch = function (id) {
        return axios_1["default"].get(this.rootUrl + "/" + id);
    };
    Sync.prototype.save = function (data) {
        var id = data.id;
        if (id) {
            return axios_1["default"].put(this.rootUrl + "/" + id, data);
        }
        return axios_1["default"].post("" + this.rootUrl, data);
    };
    return Sync;
}());
exports.Sync = Sync;
