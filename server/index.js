//  importa pachetul express din librarie
const express = require("express")
//  declara variabila app care are access la libraria express pentru functiile API(requests,inits,...)
const app = express()
//  
const cors = require("cors")

//  pentru inlaturarea oricaror probleme cu parsingul datelor de tip JSON
app.use(express.json())
app.use(cors())

//  import al modelelor
const db = require("./models")

//  importa rutele pentru postari din folderul routes
const postRouter = require("./routes/Posts")
app.use("/posts", postRouter)

//  functia sequelize verifica daca toate modelele exista in baza de date
db.sequelize.sync().then(() => {
    app.listen(3001, () => {
        console.log("Server running on port 3001")
    })
}).catch((err) => {
    console.log("Server crashed")
});

