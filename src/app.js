const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const db = require("./utils/database");
const initModels = require("./models/initModels");
const { userRoutes, chapterRoutes } = require("./routes")



const app = express();
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());


initModels();

db.authenticate()
    .then(() => console.log("Autenticacion exitosa..."))
    .catch((error) => console.log(error));

db.sync({force:false})
    .then(() => console.log("Sincronizacion exitosa..."))
    .catch((error) => console.log(error));

app.use('/ieee/v1', userRoutes);
app.use('/ieee/v1', chapterRoutes);


module.exports = app;