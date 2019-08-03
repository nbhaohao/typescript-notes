"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Eventing_1 = require("./Eventing");
var Sync_1 = require("./Sync");
var api_1 = require("../api");
var Attributes_1 = require("./Attributes");
var Model_1 = require("./Model");
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User(data) {
        return _super.call(this, new Eventing_1.Eventing(), new Sync_1.Sync(api_1.BASE_URL + "/users"), new Attributes_1.Attributes(data)) || this;
    }
    return User;
}(Model_1.Model));
exports.User = User;
