import { personajes } from "../models/Personaje.js"

export const todosLosPersonajes = async (req, res) => {
    const todos = await personajes.findAll({
        attributes: [
            "nombre",
            "imagen"
        ]
    })
    return res.json(todos)
}

export const crearPersonaje = async (req, res) => {
    try {
        const { imagen, nombre, edad, peso, historia, peliculasOSeries } = req.body
        if(imagen && nombre && edad && peso && historia && peliculasOSeries){
            const nP = await personajes.create({
                imagen,
                nombre,
                edad,
                peso,
                historia,
                peliculasOSeries
            })
            res.json({nP})
        }
    } catch (error) {
        res.json('No se puedo crear el personaje')
    }
}

export const editarPersonaje = async (req, res) => {
    try {
        const id = req.params
        const { imagen, nombre, edad, peso, historia, peliculasOSeries } = req.body
        const personaje = await personajes.findAll({
            where: {
                id
            }
        })
        const update = {
            "imagen": imagen || personaje.imagen,
            "nombre": nombre || personaje.nombre,
            "edad": edad || personaje.edad,
            "peso": peso || personaje.peso,
            "historia": historia || personaje.historia,
            "peliculasOSeries": peliculasOSeries || personaje.peliculasOSeries
        }
        await personajes.update(update, {
            where: {
                id
            }
        })
        res.json('Personaje actualizado con exito')
    } catch (error) {
        res.json('No se pudo actualizar')
    }
}