import { DataTypes, Model } from "sequelize"
import { sequelize } from "../database"
import { CourseInstance } from "./course"
import { UserInstance } from "./user"

export interface Like {
    userId: number,
    courseId: number
}

export interface LikeInstance extends Model<Like>, Like {
    Course?: CourseInstance
    user?: UserInstance
}

export const Like = sequelize.define<LikeInstance, Like>('like',{
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