"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const users_1 = __importDefault(require("../models/users"));
const ServerError_1 = require("../Errors/ServerError");
class UserController {
    async index(req, res) {
        try {
            const users = await users_1.default.find({});
            return res.status(200).json(users);
        }
        catch (error) {
            return res.status(500).json(new ServerError_1.ServerError());
        }
    }
    async show(req, res) {
        try {
            const { id } = req.params;
            if (!id) {
                return res.status(400).json(new Error('Id não encontrado'));
            }
            const user = await users_1.default.findById(id);
            return res.status(200).json(user);
        }
        catch (error) {
            return res.status(500).json(new ServerError_1.ServerError());
        }
    }
    async store(req, res) {
        try {
            const { body } = req;
            const { name, avatar_url, bio, github_username } = body;
            body.name = name.trim();
            body.avatar_url = avatar_url.trim();
            body.bio = bio.trim();
            body.github_username = github_username.trim();
            if (!name || !avatar_url || !bio || !github_username) {
                return res.status(400).json(new Error('Campo em branco'));
            }
            const user = await users_1.default.create(body);
            return res.status(200).json(user);
        }
        catch (error) {
            return res.status(500).json(new ServerError_1.ServerError());
        }
    }
    async update(req, res) {
        try {
            const { body, params } = req;
            const { id } = params;
            const { name, avatar_url, bio, github_username } = body;
            if (!id) {
                return res.status(400).json(new Error('Id não encontrado'));
            }
            body.name = name.trim();
            body.avatar_url = avatar_url.trim();
            body.bio = bio.trim();
            body.github_username = github_username.trim();
            const userBody = {};
            const isFields = ['name', 'avatar_url', 'bio', 'github_username'];
            for (const field of isFields) {
                if (field)
                    userBody[field] = body[field];
            }
            const user = await users_1.default.findByIdAndUpdate({
                _id: id
            }, {
                $set: userBody
            }, {
                upsert: true
            });
            return res.status(200).json(user);
        }
        catch (error) {
            console.log(error.message);
            return res.status(500).json(new ServerError_1.ServerError());
        }
    }
    async destroy(req, res) {
        try {
            const { id } = req.params;
            if (!id) {
                return res.status(400).json(new Error('Id não encontrado'));
            }
            await users_1.default.findByIdAndDelete(id);
            return res.status(200).json('Deletado com sucesso');
        }
        catch (error) {
            return res.status(500).json(new ServerError_1.ServerError());
        }
    }
}
exports.default = new UserController();
