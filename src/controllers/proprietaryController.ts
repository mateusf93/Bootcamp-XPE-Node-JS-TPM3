import { Request,Response } from "express";
import { ProprietaryServices } from "@/services/proprietaryServices";
import { animais, proprietarios } from "@prisma/client";

const propServices : ProprietaryServices = new ProprietaryServices();

export class ProprietaryController{

        static async getProprietary(req:Request, res:Response){
            try{
                const data = await propServices.getAllProprietaries();
                res.send(data).status(200);
            }catch(error){
                res.send("Não foi possível obter este proprietário").status(400);
            }
        }
        static async getProprietaryById(req:Request, res:Response){
            try{
                const id :number = parseInt(req.params.id);
                const data : proprietarios = await propServices.getProprietaryById(id);
                res.send(data).status(200);
            }catch(error){
                res.send("Proprietário não encontrado").status(404);
            }
        }
        static async createProprietary(req:Request, res:Response ){
            try{
                const proprietary : proprietarios = req.body;
                const data :proprietarios = await propServices.createProprietary(proprietary);
                res.send(data).status(200);
            }catch(error){
                res.send("Não foi possível criar novo proprietário").status(400);
            }
        }
        static async deleteProprietary(req:Request, res:Response){
            try{
                const id:number = parseInt(req.params.id);
                await propServices.deleteProprietary(id);
                res.send("Deletado com Sucesso").status(203);
            }catch(error){
                res.send("Não foi possível deletar este proprietário").status(400);
            }
        }

        static async updateProprietary(req:Request, res:Response){
            try{
                const id:number = parseInt(req.params.id);
                const data:proprietarios = req.body;
                const updated = await propServices.updateProprietary(id, data);
                res.send(updated).status(200)
            }catch(error){
                res.send("Não foi possível alterar esse proprietário!").status(400);

            }
        }

        static async getProprietaryAnimals(req:Request, res:Response){
            try{
                const id:number = parseInt(req.params.id);
                const data:animais[] = await propServices.getProprietaryAnimals(id);
                res.send(data).status(200);
            }catch(error){
                res.send("Não foi possível obter os animais deste proprietário").status(400);
            }
        }

}