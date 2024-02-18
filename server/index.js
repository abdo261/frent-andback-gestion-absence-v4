const express = require('express')
const app = express()
const {PORT}= require('dotenv').config().parsed

//connection to MONGO_DB
require('./config/connection')

//use cors
const cors = require('cors')

//app use 
app.use(cors())
app.use(express.json())

//import routers
const userRouter = require('./routers/UserRouter')
const communeRouter = require('./routers/CommuneRouter')
const etablissementRouter = require('./routers/EtablissementRouter')
const EnseignantRouter = require('./routers/EnseignantRouter')

//end point 
app.use('/api/users',userRouter)
app.use('/api/communes',communeRouter)
app.use('/api/etablissements',etablissementRouter)
app.use('/api/enseignants',EnseignantRouter)

//app listen
app.listen(PORT,()=>console.log(`server raning good in port ${PORT}`))