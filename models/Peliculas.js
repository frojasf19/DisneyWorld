import db from "../database/db.js";
import { DataTypes } from "sequelize";

export const peliculas = db.define('peliculas o series', {
    imagen: {
        type: DataTypes.STRING
    },
    titulo: {
        type: DataTypes.STRING
    },
    fechaDeCreacion: {
        type: DataTypes.INTEGER
    },
    calificacion: {
        type: DataTypes.STRING
    },
    personajesAsociados: {
        type: DataTypes.STRING
    }
})

export default peliculas
