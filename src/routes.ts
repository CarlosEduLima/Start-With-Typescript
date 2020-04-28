import express from "express";
import UserController from "./controllers/UserController";
const routes = express.Router();

routes.get('/new', UserController.create);

export default routes;