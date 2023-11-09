import express from "express";
import homeController from "../controller/HomeController";
const router = express.Router();

router.get('/', homeController.handleHelloWorld);
router.get('/user-page', homeController.handleUserPage);

module.exports = router;
