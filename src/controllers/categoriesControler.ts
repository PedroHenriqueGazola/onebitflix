import { Category } from "../models/category"
import { Request, Response } from "express"

export const categoriesControllers = {
    index: async(req:Request, res: Response) => {
        try {
            const categories = await Category.findAll({
                attributes: ['id', 'name', 'position'],
                order: [['position', 'ASC']]
            })
            return res.json(categories)
        } catch (error) {
            if(error instanceof Error) {
                return res.status(400).json( {message: error.message})
            }
        }
        
    }
}