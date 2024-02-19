const express = require("express");
const cors = require("cors");
const app = express();
const { PORT } = require("dotenv").config().parsed;

//connection to MONGO_DB
require("./config/connection");

//app use
app.use(cors());
app.use(express.json());

//import routers
const userRouter = require("./routers/UserRouter");
const communeRouter = require("./routers/CommuneRouter");
const etablissementRouter = require("./routers/EtablissementRouter");
const EnseignantRouter = require("./routers/EnseignantRouter");
const AbsenceRouter = require("./routers/AbsenceRouter");

//end point
app.use("/api/users", userRouter);
app.use("/api/communes", communeRouter);
app.use("/api/etablissements", etablissementRouter);
app.use("/api/enseignants", EnseignantRouter);
app.use("/api/absences", AbsenceRouter);

//app listen
app.listen(PORT, () => console.log(`server raning good in port ${PORT}`));
