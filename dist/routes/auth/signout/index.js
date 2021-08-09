"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signout = void 0;
exports.signout = function (req, res) {
    req.session = null;
    res.send(null);
};
