import { PrismaClient, animais, proprietarios } from "@prisma/client";


const prisma: PrismaClient = new PrismaClient();

export class ProprietaryRepository {

    public async getAllProprietary(): Promise<proprietarios[]> {
        return await prisma.proprietarios.findMany();
    }

    public async getProprietaryById(id: number):Promise<proprietarios> {
        return await prisma.proprietarios.findUnique({
            where: {
                proprietario_id: id
            }
        })
    }

    public async createProprietaryById(proprietary: proprietarios): Promise<proprietarios> {
        return await prisma.proprietarios.create({
            data: proprietary
        })
    }

    public async deleteProprietaryById(id: number):Promise<proprietarios> {
        return await prisma.proprietarios.delete({
            where: {
                proprietario_id: id
            }
        })
    }

    public async updateProprietaryById(id: number, proprietary: proprietarios): Promise<proprietarios> {
        return await prisma.proprietarios.update({
            where: {
                proprietario_id: id
            }, data: proprietary
        })
    }
    public async getProprietaryAnimals(id: number): Promise<animais[]> {
        return await prisma.animais.findMany({
            where:{
                animal_id: id
            }
        })
    }

    
}