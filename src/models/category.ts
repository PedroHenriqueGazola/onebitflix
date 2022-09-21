import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../database";

export interface category {
    id: number,
    name: string,
    position: number
}

export interface CategoryCreationAttributes extends Optional<category, 'id'> {};

export interface CategoryInstance extends Model <category, CategoryCreationAttributes>, category {};

export const Category = sequelize.define<CategoryInstance, category>('Category', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING
      },
      position: {
        allowNull: false,
        unique: true,
        type: DataTypes.INTEGER
      }
})