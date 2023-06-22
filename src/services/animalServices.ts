import { animalRepository } from "@/repositories/animalRepository";
import animais from "@prisma/client";

const animalRepo = new animalRepository();

export class AnimalService{

    async getAllAnimals(): Promise<animais.animais[]>{
        return await animalRepo.getAllAnimals();
    }

    async getAnimalById(id: number): Promise<animais.animais>{
        return await animalRepo.getAnimalById(id);
    }

    async getAnimalByProprietaryId(id: number): Promise<animais.animais[]>{
        return await animalRepo.getProprietaryAnimals(id);
    }

    async createAnimal(animal:any): Promise<animais.animais>{
        return await animalRepo.createAnimal(animal);
    }

    async updateAnimal(id: number, animais: any): Promise<animais.animais>{
        return await animalRepo.updateAnimal(id, animais);
    }

    async deleteAnimal(id: number): Promise<animais.animais>{
        return await animalRepo.deleteAnimal(id);
    }


}