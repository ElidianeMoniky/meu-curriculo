const express = require("express");
const cors = require("cors");
require("dotenv").config();

const curriculoRoutes = require("./routes/curriculoRoutes");

require("./database/database");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", curriculoRoutes);

app.get("/", (req, res) => {
  res.json({
    mensagem: "API do Currículo e Portfólio funcionando!",
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});