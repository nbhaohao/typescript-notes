"use strict";
exports.__esModule = true;
var faker_1 = require("faker");
var User = /** @class */ (function () {
    function User() {
        this.name = faker_1.name.findName();
        this.location = {
            lat: parseFloat(faker_1.address.latitude()),
            lng: parseFloat(faker_1.address.longitude())
        };
    }
    return User;
}());
exports.User = User;
