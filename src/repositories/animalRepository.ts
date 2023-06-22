import { PrismaClient, animais } from "@prisma/client";

const prisma = new PrismaClient();


export class animalRepository{

    public async getAllAnimals(): Promise<animais[]>{
        return await prisma.animais.findMany();
    }

    public async getAnimalById(id: number): Promise<animais>{
        return await prisma.animais.findUnique({
            where: {
                animal_id: id
            }
        });
    }

    public async createAnimal(animal: animais): Promise<animais>{
        return await prisma.animais.create({
            data: animal
        });
    }

    public async updateAnimal(id: number, animal: animais): Promise<animais>{
        return await prisma.animais.update({
            where: {
                animal_id: id
            },
            data: animal
        });
    }

    public async deleteAnimal(id: number): Promise<animais>{
        return await prisma.animais.delete({
            where: {
                animal_id: id
            }
        });
    }

    public async getProprietaryAnimals(id: number): Promise<animais[]>{
        return await prisma.animais.findMany({
            where:{
                proprietario_id: id
            }
        })
    }



}