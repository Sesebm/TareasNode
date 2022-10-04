/* Iniciar express */
const express = require("express");
const app = express();

/* Iniciar Enrutado */
const usersRouter = require('./MVC/users.router')
app.use(express.json());
app.get("/", (req, res) => {
    res.status(200).json({ message: "Funciona OK" });
  });
app.use("/", usersRouter)

app.listen(3000, () => {
    console.log("Inicio en el puerto 3000");
  });
