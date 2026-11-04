const express = require("express");

const router = express.Router();

// Rota do perfil
router.get("/perfil", (req, res) => {
  res.json({
    nome: "Seu nome",
    profissao: "Sua profissão",
    descricao: "Sua apresentação pessoal",
    email: "seuemail@email.com",
    github: "https://github.com/seuusuario",
    linkedin: "Seu LinkedIn"
  });
});

// Rota da formação acadêmica
router.get("/academica", (req, res) => {
  res.json([]);
});

// Rota da experiência profissional
router.get("/profissional", (req, res) => {
  res.json([]);
});

// Rota dos projetos
router.get("/projetos", (req, res) => {
  res.json([]);
});

module.exports = router;