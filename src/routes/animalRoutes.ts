import { Router } from "express";
import { AnimalController } from "../controllers/animalController";


const routes = Router();

routes.get("/animais", AnimalController.getAllAnimals);
routes.get("/animais/:id", AnimalController.getAnimalById);
routes.get("/animais/proprietario/:id", AnimalController.getAnimalByProprietaryId);
routes.post("/animais", AnimalController.createAnimal);
routes.put("/animais/:id", AnimalController.updateAnimal);
routes.delete("/animais/:id", AnimalController.deleteAnimal);


export default routes;