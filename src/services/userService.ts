import { User } from "../models"
import { UserCreatrionAttributes } from "../models/user"

export const userService = {
    findByEmail: async(email: string) => {
        const user = await User.findOne({
            where: {
                email
            }
        })
        return user
    },

    create: async(attributes: UserCreatrionAttributes) => {
        const user = await User.create(attributes)
        return user
    }
}