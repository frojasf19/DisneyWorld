import db from "../database/db.js";
import { DataTypes } from "sequelize";

export const personajes = db.define('personajes', {
    imagen: {
        type: DataTypes.STRING
    },
    nombre: {
        type: DataTypes.STRING
    },
    edad: {
        type: DataTypes.INTEGER
    },
    peso: {
        type: DataTypes.STRING
    },
    historia: {
        type: DataTypes.STRING
    },
    peliculasOSeries: {
        type: DataTypes.STRING
    }
})
