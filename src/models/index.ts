import { Category } from "./category";
import { Course } from "./course";
import { Episode } from "./episode";
import { Favorite } from "./favorite";
import { Like } from "./like";
import { User } from './user'
import { WatchTime } from "./watchTime";
Category.hasMany(Course)

Course.belongsTo(Category)
Course.hasMany(Episode)
Course.belongsToMany(User, {through: Favorite})
Course.belongsToMany(User, {through: Like})
Course.hasMany(Favorite, {as: 'favoritesUsers', foreignKey: 'course_id'})

Episode.belongsTo(Course)
Episode.belongsToMany(User, {through: WatchTime})

Favorite.belongsTo(Course)
Favorite.belongsTo(User)

User.belongsToMany(Course, {through: Favorite})
User.belongsToMany(Course, {through: Like})
User.belongsToMany(Episode, {through: WatchTime})
User.hasMany(Favorite, {as: 'favoritesCoursers', foreignKey: 'user_id'})



export {
    Category,
    Course,
    Episode,
    Favorite,
    User,
    Like,
    WatchTime
}