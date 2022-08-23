import express from 'express'
import db from './database/db.js'
import routesAuth from './routes/auth.js'
import routes from './routes/routes.js'

const app = express()


app.use(express.json())

app.use('/', routes)
app.use('/', routesAuth)

try {
    db.authenticate()
    console.log('Conectaba a la base de datos')
} catch (error) {
    console.log('error en la conexion a la base de datos')
}


app.listen(3001)
console.log('Api escuchando en el puerto 3001')