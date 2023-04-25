const express = require('express')
const bodyParser = require('body-parser')
const sequelize = require('./src/db/sequelize')
const cors = require('cors');


const app = express();
const port = process.env.PORT || 4000;
app.use(cors());
app.use(bodyParser.json())

sequelize.initDb();

app.get('/', (req, res) => {
    res.json('Hello, World !🖐️')
})

//ici nos future points de terminaison

/* ENTITE */
require('./src/routes/entite/createEntite')(app)
require('./src/routes/entite/deleteEntite')(app)
require('./src/routes/entite/findAllEntite')(app)
require('./src/routes/entite/findEntiteById')(app)
require('./src/routes/entite/updateEntite')(app)

/* OBLIGATIONS */
require('./src/routes/obligation/createObligation')(app)
require('./src/routes/obligation/deleteObligation')(app)
require('./src/routes/obligation/finfAllObligation')(app)
require('./src/routes/obligation/findBobligationById')(app)
require('./src/routes/obligation/updtaeObligation')(app)
/* SUIVI OBLIGATION */

/* UTILISATEUR */
require('./src/routes/user/createUser')(app)
require('./src/routes/user/findUserById')(app)
require('./src/routes/user/updateUser')(app)
require('./src/routes/user/deleteUser')(app)
require('./src/routes/user/findAllUser')(app)

/* ROLE */
require('./src/routes/role/createRole')(app)
require('./src/routes/role/deleteRole')(app)
require('./src/routes/role/findAllRole')(app)
require('./src/routes/role/findRoleByRole')(app)
require('./src/routes/role/updateRole')(app)
/* WORKFLOW */

/* LOGIN */
require('./src/routes/login')(app)

app.use(({ res }) => {
    const message = "Impossible de trouver la ressource demander! vous pouver essayer une autre URL"
    res.status(404).json({ message })
})

app.listen(port, () => console.log(`Notre application Node est demarée sur : http://localhost:${port}`))