import { Request, Response } from "express";
import { userService } from "../services/userService";

export const authController = {
    register: async(req: Request, res: Response) => {
        const { firstName, lastName, email, password, birth, phone} = req.body

        try {
            const userAlreadyExist = await userService.findByEmail(email)
            if(userAlreadyExist) {
                throw new Error('Esse email já existe')
            }
            const user = await userService.create({
                firstName,
                lastName,
                email,
                password,
                birth,
                phone,
                role: 'user'
            })
            return res.status(201).json(user)
        } catch (error) {
            if(error instanceof Error) {
                return res.status(400).json( {message: error.message})
            }
        }

    }

}