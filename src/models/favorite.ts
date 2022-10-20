import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database";
import { CourseInstance } from "./course";
import { UserInstance } from "./user";

export interface Favorite {
    userId: number,
    courseId: number
}

export interface FavoriteInstance extends Model<Favorite>, Favorite {
    Course?: CourseInstance
    user?: UserInstance
}

export const Favorite = sequelize.define<FavoriteInstance, Favorite>('favorite',{
    userId: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.INTEGER,
        references: {model: 'user', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT'
    },
    courseId: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.INTEGER,
        references: {model: 'course', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT'
    },

})