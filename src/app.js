import express from "express";
import morgan from "morgan";

//Rutas
import languageRoutes from "./routes/language.routes"

const app = express();

//Config
app.set("port",443);

//Middleware - intermediarios entre respuesta y peticion
app.use(morgan("dev"));

//Rutas
// app.use(languageRoutes); //Cambiar la ruta de acceso
app.use("/api/languages",languageRoutes);

export default app;