import db from "../database/db.js";

export const todosLosPersonajes = async (req, res) => {
    const todos = await db.findAll({
        attributes: [
            "nombre",
            "imagen"
        ]
    })
    return res.json(todos)
}