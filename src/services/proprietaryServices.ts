import { ProprietaryRepository } from "@/repositories/proprietaryRepository";
import { animais, proprietarios } from "@prisma/client";

const PropRepo : ProprietaryRepository = new ProprietaryRepository();


export class ProprietaryServices{

    async getAllProprietaries(): Promise<proprietarios[]>{
        const data = await PropRepo.getAllProprietary();
        return data;
    }

    async getProprietaryById(id:number): Promise<proprietarios>{
        const data = await PropRepo.getProprietaryById(id)
        return data;
    }

    async createProprietary(data:proprietarios): Promise<proprietarios>{
        const proprietary:proprietarios = await PropRepo.createProprietaryById(data);
        return proprietary;
    }

    async deleteProprietary(id:number): Promise<proprietarios>{
        return await PropRepo.deleteProprietaryById(id);
    }

    async updateProprietary(id:number, data:proprietarios): Promise<proprietarios>{
        const proprietary:proprietarios = await PropRepo.updateProprietaryById(id,data);
        return proprietary
    }

    async getProprietaryAnimals(id:number): Promise<animais[]>{
        const proprietaryAnimals :animais[] = await PropRepo.getProprietaryAnimals(id);
        return proprietaryAnimals;
    }

    

}