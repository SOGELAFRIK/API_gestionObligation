const express = require('express')
const bodyParser = require('body-parser')
const sequelize = require('./src/db/sequelize')

const app = express();
const port = process.env.PORT || 4000;

app.use(bodyParser.json())

sequelize.initDb();

app.get('/', (req, res) => {
    res.json('Hello, World !🖐️')
})

//ici nos future points de terminaison

/* ENTITE */

/* OBLIGATIONS */

/* SUIVI OBLIGATION */

/* UTILISATEUR */
require('./src/routes/user/createUser')(app)
require('./src/routes/user/findUserById')(app)
require('./src/routes/user/updateUser')(app)
require('./src/routes/user/deleteUser')(app)
require('./src/routes/user/findAllUser')(app)

/* WORKFLOW */

app.use(({ res }) => {
    const message = "Impossible de trouver la ressource demander! vous pouver essayer une autre URL"
    res.status(404).json({ message })
})

app.listen(port, () => console.log(`Notre application Node est demarée sur : http://localhost:${port}`))