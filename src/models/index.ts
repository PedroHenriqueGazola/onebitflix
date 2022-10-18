import { Category } from "./category";
import { Course } from "./course";
import { Episode } from "./episode";
import { Favorite } from "./favorite";
import { User } from './user'
Category.hasMany(Course)

Course.belongsTo(Category)
Course.hasMany(Episode)
Course.belongsToMany(User, {through: Favorite})
Course.hasMany(Favorite, {as: 'favoritesUsers', foreignKey: 'course_id'})

Episode.belongsTo(Course)

Favorite.belongsTo(Course)
Favorite.belongsTo(User)

User.belongsToMany(Course, {through: Favorite})
User.hasMany(Favorite, {as: 'favoritesCoursers', foreignKey: 'user_id'})

export {
    Category,
    Course,
    Episode,
    Favorite,
    User
}