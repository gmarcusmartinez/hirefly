"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var connectDB_1 = require("./config/connectDB");
var socket_1 = require("./routes/socket");
connectDB_1.connectDB();
var PORT = process.env.PORT || 5000;
socket_1.server.listen(PORT, function () { return console.log(("Running on port " + PORT).yellow); });
