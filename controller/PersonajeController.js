import { personajes } from "../models/Personaje.js"

export const todosLosPersonajes = async (req, res) => {
    try {
        const { nombre, edad, peso, peliculasOSeries } = req.query
        if(!nombre && !edad && !peso && !peliculasOSeries){
            const todos = await personajes.findAll({
                attributes: [
                    "nombre",
                    "imagen"
                ]
            })
            return res.json(todos)
        }else if(nombre){
            const name = await personajes.findAll({where: {nombre: nombre}})
            res.json(name)
        }else if(edad){
            const age = await personajes.findAll({where: {edad: edad}})
            res.json(age)
        }else if(peso){
            const pes = await personajes.findAll({where: {peso: peso}})
            res.json(pes)
        }else if(peliculasOSeries){
            const peli = await personajes.findAll({where: {peliculasOSeries: peliculasOSeries}})
            res.json(peli)
        }
        
    } catch (error) {
        res.json('Ocurrio un error')
    }
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

export const eliminarPersonaje = async (req, res) => {
    try {
        const id = req.params
        await personajes.destroy({
            where: {
               id
            }
        })
        res.json('Personaje eliminado con exito')
    } catch (error) {
        res.json('No se pudo eliminar al personaje')
    }
}