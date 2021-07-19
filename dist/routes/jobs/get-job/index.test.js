"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var supertest_1 = __importDefault(require("supertest"));
var app_1 = require("../../../app");
var auth_helper_1 = require("../../../test/auth-helper");
describe('Route Access', function () {
    it('has a route handler listening to /api/jobs/:id for get requests', function () { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, supertest_1.default(app_1.app).get('/api/jobs/:id')];
                case 1:
                    response = _a.sent();
                    expect(response.status).not.toEqual(404);
                    return [2 /*return*/];
            }
        });
    }); });
    it('can only be accessed if a user is signed in', function () { return __awaiter(void 0, void 0, void 0, function () {
        var response, errMsg;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, supertest_1.default(app_1.app).get('/api/jobs/:id').expect(401)];
                case 1:
                    response = _a.sent();
                    errMsg = 'Not Authorized';
                    expect(response.body.errors[0].message).toBe(errMsg);
                    return [2 /*return*/];
            }
        });
    }); });
    it('returns a status other than 401 if the user is signed in', function () { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, supertest_1.default(app_1.app)
                        .get('/api/jobs/:id')
                        .set('Cookie', auth_helper_1.fakeAuthCookie())];
                case 1:
                    response = _a.sent();
                    expect(response.status).not.toEqual(401);
                    return [2 /*return*/];
            }
        });
    }); });
});
describe('Unsuccessfull Job Fetch: Job Does not exist', function () {
    var fakeid = mongoose_1.default.Types.ObjectId().toHexString();
    it('returns a 400 response.', function () { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, supertest_1.default(app_1.app)
                        .get("/api/jobs/" + fakeid)
                        .set('Cookie', auth_helper_1.fakeAuthCookie())
                        .expect(400)];
                case 1:
                    response = _a.sent();
                    expect(response.body.errors[0].message).toEqual('Job not found');
                    return [2 /*return*/];
            }
        });
    }); });
});
describe('Successful Job Fetch', function () {
    var title = 'Node Js Backend Developer';
    var description = 'lorem ipsum';
    var location = 'Berlin, Germany';
    var salary = 50000;
    var imgUrl = 'fakeimage.com';
    it('returns a 200', function () { return __awaiter(void 0, void 0, void 0, function () {
        var body, res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, supertest_1.default(app_1.app)
                        .post('/api/jobs')
                        .set('Cookie', auth_helper_1.fakeAuthCookie())
                        .send({ title: title, description: description, location: location, salary: salary, imgUrl: imgUrl })
                        .expect(201)];
                case 1:
                    body = (_a.sent()).body;
                    return [4 /*yield*/, supertest_1.default(app_1.app)
                            .get("/api/jobs/" + body._id)
                            .set('Cookie', auth_helper_1.fakeAuthCookie())
                            .expect(200)];
                case 2:
                    res = _a.sent();
                    expect(res.body).toBeDefined();
                    return [2 /*return*/];
            }
        });
    }); });
});
