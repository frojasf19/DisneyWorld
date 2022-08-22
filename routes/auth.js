import express from 'express'

const users = []
const routesAuth = express()

routesAuth.post('/auth/register', (req, res) => {
    const { email, password } = req.body
    if(!email || !password) return res.send(400)
    const newUser = {
        email,
        password
    }
    users.push(newUser)
    return res.json('Usuario registrado con exito')
})
routesAuth.post('/auth/login', (req, res) => {
    const { email, password } = req.body
    if(!email || !password) return res.send(400)
    const veri = users.find(e => e.email === email && e.password === password)
    if(veri) return res.send('Acceso permitido al usuario')
    return res.send('Usuario no registrado')
})

export default routesAuth