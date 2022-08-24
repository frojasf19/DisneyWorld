import { or } from "sequelize/types";
import peliculas from "../models/Peliculas.js";

export const todasLasPeliculas = async (req, res) => {
    try {
        const { name, order } = req.query
        if(!name && !order){
            const listPersonajes = await peliculas.findAll({
                where: {
                    imagen,
                    titulo,
                    fechaDeCreacion
                }
            })
            res.json(listPersonajes)
        }else if(name){
            const filtName = await peliculas.findAll({where: {nombre: name}})
            res.json(filtName)
        }else if(order == asc){
            const todas = peliculas.findAll()
            if(!todas) res.json('No hay peliculas')
            todas.sort((a, b) => new Date(a.fechaDeCreacion) - new Date(b.fechaDeCreacion))
        }else if(order == des){
            const todas = peliculas.findAll()
            if(!todas) res.json('No hay peliculas')
            todas.sort((a, b) => new Date(b.fechaDeCreacion) - new Date(a.fechaDeCreacion))
        }
    } catch (error) {
        res.json({message: error.message})
    }
}

export const crearPelicula = async (req, res) => {
    try {
        const { imagen, titulo, fechaDeCreacion, personajesAsociados } = req.body
        await peliculas.create({
            imagen,
            titulo,
            fechaDeCreacion,
            personajesAsociados
        })
        res.json('Personaje creado con exito')
    } catch (error) {
        res.json({message: error.message})
    }
}

export const editarPelicula = async (req, res) => {
    try {
        const { id } = req.params
        const { imagen, titulos, fechaDeCreacion, personajesAsociados } = req.body
        const editPerso = await peliculas.findByPk(id)
        if(!editPerso) res.json('No se pillo al personaje')
        const update = {
            "imagen": imagen || editPerso.imagen,
            "titulos": titulos || editPerso.titulos,
            "fechaDeCreacion": fechaDeCreacion || editPerso.fechaDeCreacion,
            "personajesAsociados": personajesAsociados || editPerso.personajesAsociados
        }
        await peliculas.update(update, {
            where:{
                id
            }
        })
        res.json('Personaje actualizado con exito')
    } catch (error) {
        res.json({message: error.message})
    }
}

export const eliminarPelicula = async (req, res) => {
    try {
        const  { id } = req.params
        await peliculas.destroy({
            where: {
                id
            }
        })
        res.json('Pelicula eliminado con exito')
    } catch (error) {
        res.json({message: error.message})
    }
}
