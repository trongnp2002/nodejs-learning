import express from "express";
import userController from "../controller/UserController";
const router = express.Router();

router.post('/create-user', userController.handleCreateUser);

module.exports = router;
