"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const mongoose_1 = require("mongoose");
const routes_1 = __importDefault(require("./app/routes"));
class App {
    constructor() {
        this.db();
        this.express = express_1.default();
        this.middlewares();
        this.routes();
    }
    middlewares() {
        this.express.use(cors_1.default());
        this.express.use(helmet_1.default());
        this.express.use(express_1.default.urlencoded({ extended: true }));
        this.express.use(express_1.default.json());
    }
    routes() {
        this.express.use('/api/', routes_1.default);
    }
    async db() {
        try {
            await mongoose_1.connect('mongodb://localhost:27017/api-github', {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useCreateIndex: true
            });
            console.log('MongoDb connect...');
        }
        catch (error) {
            return console.error(error.message);
        }
    }
}
exports.default = new App().express;
