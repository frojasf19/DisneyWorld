import express from 'express'
import db from './database/db.js'

const app = express()

try {
    db.authenticate()
    console.log('Conectaba a la base de datos')
} catch (error) {
    console.log('error en la conexion a la base de datos')
}


app.listen(3001)
console.log('Api escuchando en el puerto 3001')