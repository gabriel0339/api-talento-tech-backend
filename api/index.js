import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import productsRoutes from "../routes/products.routes.js";
import authRoutes from "../routes/auth.routes.js";

const app = express();

app.use(cors()); "Habilita cors para permitir peticiones desde otros dominios"
app.use(bodyParser.json());"Permite interpretar el cuerpo de las peticiones en formato json"

app.use("/api/products", productsRoutes);
app.use("/auth", authRoutes); "Rutas de autenticación ejemplo: /auth/login, /auth/register"



app.get("/test", (req, res) => {
  res.json({ message: "API OK" }); "prueba para verificar que la API está funcionando"
});

app.use((req, res) => {
  res.status(404).json({ message: "Ruta no encontrada" }); "middleware para manejar rutas no encontradas (404) ,se ejecuta cuando ninguna ruta anterior coincide"
});

export default app;
