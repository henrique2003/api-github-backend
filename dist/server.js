"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
app_1.default.listen((_a = 3001) !== null && _a !== void 0 ? _a : process.env.PORT, () => {
    console.log('API running');
});
