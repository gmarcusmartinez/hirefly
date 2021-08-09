"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCurrentUser = void 0;
exports.getCurrentUser = function (req, res) {
    res.send({ currentUser: req.currentUser || null });
};
