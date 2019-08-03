"use strict";
exports.__esModule = true;
var UserForm = /** @class */ (function () {
    function UserForm(parent) {
        this.parent = parent;
    }
    UserForm.prototype.template = function () {
        return "\n        <div>\n            <h1>User Form</h1>\n            <input />\n        </div>\n    ";
    };
    UserForm.prototype.render = function () {
        // if (this.parent === null) {
        //   throw new Error("parent can not be null");
        // }
        var templateElement = document.createElement("template");
        templateElement.innerHTML = this.template();
        this.parent.append(templateElement.content);
    };
    return UserForm;
}());
exports.UserForm = UserForm;
