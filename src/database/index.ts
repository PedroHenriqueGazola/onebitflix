import { Sequelize } from 'sequelize'

export const sequeize = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    database: 'onebitflix_development',
    username: 'postgres',
    password: 'pedrogazola123',
    define: {
        underscored: true
    }
})
