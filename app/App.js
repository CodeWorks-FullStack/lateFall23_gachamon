import { GachamonsController } from './controllers/GachamonsController.js';
// import { router } from './router-config.js'; 
// Commented out router to 'disable' it for today's lecture
// typically not recommend but for now it's alright

class App {

  // router = router

  GachamonsController = new GachamonsController()

}


const app = new App()
// @ts-ignore
window.app = app
