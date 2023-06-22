import { AnimalService } from "@/services/animalServices";
import { animais } from "@prisma/client";
import { Request, Response } from "express";
import { stat } from "fs";
import { parse } from "path";

const animalService: AnimalService = new AnimalService();


export class AnimalController {

    static async getAllAnimals(req: Request, res: Response): Promise<void> {
        try {
            const data : animais[] = await animalService.getAllAnimals();
            res.send(data);
        } catch (error) {
            res.send("Não foi possível obter a lista de animais");
        }
    }
    static async getAnimalById(req: Request, res: Response): Promise<void> {
        try {
            const id : number = parseInt(req.params.id);
            const data : animais = await animalService.getAnimalById(id);
            res.send(data);

        } catch (error) {
            res.send("Não foi possível obter o animal");
        }
    }

    static async createAnimal(req: Request, res: Response): Promise<void> {
            try{
                const animal : animais = req.body;
                const data : animais = await animalService.createAnimal(animal);
                res.send(data);
            }catch(error){
                res.send("Não foi possível criar o animal");
            }
    }

    static async updateAnimal(req: Request, res: Response): Promise<void> {
        try{
            const id :number = parseInt(req.params.id);
            const animal :animais = req.body;
            const data :animais = await animalService.updateAnimal(id, animal);
            res.send(data);
        }catch(error){
            res.send("Não foi possível atualizar o animal");
        }
    }
    static async deleteAnimal(req: Request, res: Response): Promise<void> {
        try{
            const id :number = parseInt(req.params.id);
            const data :animais = await animalService.deleteAnimal(id);
            res.send(data);
        } catch(error){
            res.send("Não foi possível deletar o animal");
           }
        }
    
    static async getAnimalByProprietaryId(req: Request, res: Response): Promise<void> {
        try{
            const id :number = parseInt(req.params.id);
            const data :animais[] = await animalService.getAnimalByProprietaryId(id);
            res.send(data);
        } catch(error){
            res.send("Não foi possível obter a lista de animais");
           }
    }
    }
