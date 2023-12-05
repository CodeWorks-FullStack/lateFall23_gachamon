import { ExamplesController } from "./controllers/ExamplesController.js";
import { HomeController } from "./controllers/HomeController.js";
import { Router } from "./utils/Router.js";



// REVIEW the router looks at the website (browser) URL and loads a 'Route'.
// As the router changes 'Routes' it re-loads any controllers, and injects the view, onto the index.html 'router-view'
export const router = new Router([
  {
    path: '',
    controllers: [HomeController, ExamplesController],
    view: null
  }
])