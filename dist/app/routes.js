"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = __importDefault(require("./controllers/user-controller"));
const router = express_1.Router();
const { index, show, store, update, destroy } = user_controller_1.default;
// Index
router.get('/users', index);
// Show
router.get('/user/:id', show);
// Store
router.post('/user', store);
// Update
router.put('/user/:id', update);
// Destroy
router.delete('/user/:id', destroy);
exports.default = router;
