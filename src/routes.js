import { Router  } from "express";

import homeController  from "./controllers/homeController.js";
import errorController from "./controllers/errorController.js";

const routes = Router();

// Home page controller.
routes.use(homeController);

// TODOs add other controllers here.


// Error controller.
routes.use(errorController);

export default routes;