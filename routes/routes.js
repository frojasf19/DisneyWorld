import express from 'express'
import { crearPersonaje, editarPersonaje, eliminarPersonaje, todosLosPersonajes } from '../controller/PersonajeController.js'

const routes = express()

routes.get('/personajes', todosLosPersonajes)

routes.post('/personajes', crearPersonaje)

routes.patch('/personajes/:id', editarPersonaje)

routes.delete('/personajes/:id', eliminarPersonaje)

export default routes