import { Sequelize } from "sequelize";


const db = new Sequelize('disneyworld', 'root', 'Aspirine123', {
    host: 'localhost',
    dialect: 'mysql'
})

export default db