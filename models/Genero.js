import db from "../database/db.js";
import { DataTypes } from "sequelize";

export const generos = db.define('generos', {
    imagen: {
        type: DataTypes.STRING
    },
    nombre: {
        type: DataTypes.STRING
    },
    peliculasOSeries: {
        type: DataTypes.STRING
    }
})

export default generos
