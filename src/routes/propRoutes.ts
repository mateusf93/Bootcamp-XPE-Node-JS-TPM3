import { Router } from "express";
import { ProprietaryController } from "@/controllers/proprietaryController";

const routes = Router();

routes.get("/proprietarios", ProprietaryController.getProprietary);
routes.get("/proprietarios/:id", ProprietaryController.getProprietaryById);
routes.get("/proprietarios/animais/:id", ProprietaryController.getProprietaryAnimals)
routes.post("/proprietarios", ProprietaryController.createProprietary);
routes.put("/proprietarios/:id", ProprietaryController.updateProprietary);
routes.delete("/proprietarios/:id", ProprietaryController.deleteProprietary);

export default routes;