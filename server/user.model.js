"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var User = /** @class */ (function () {
    function User(username, DOB, age, email, password, valid) {
        this.username = username;
        this.DOB = DOB;
        this.age = age;
        this.email = email;
        this.password = password;
        this.valid = valid;
    }
    return User;
}());
exports.User = User;
