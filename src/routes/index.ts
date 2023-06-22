
import { Router } from "express";
import animalRoutes from "./animalRoutes";
import propRoutes from "./propRoutes"
const routes = Router();

routes.use(animalRoutes);
routes.use(propRoutes);
  
export default routes;