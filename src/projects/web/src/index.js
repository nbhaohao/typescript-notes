"use strict";
exports.__esModule = true;
var User_1 = require("./models/User");
var user = new User_1.User({ name: "aaaa", age: 18 });
console.log("user", user, User_1.User);
// user.on("save", () => {
//   console.log("user save");
// });
// user.save();
// console.log(user);
