const Database = require("better-sqlite3");
const path = require("path");

const db = new Database(
  path.join(__dirname, "curriculo.db")
);

db.exec(`

  CREATE TABLE IF NOT EXISTS perfil (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    profissao TEXT,
    descricao TEXT,
    email TEXT,
    github TEXT,
    linkedin TEXT
  );

  CREATE TABLE IF NOT EXISTS academica (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    instituicao TEXT NOT NULL,
    curso TEXT NOT NULL,
    periodo TEXT,
    descricao TEXT
  );

  CREATE TABLE IF NOT EXISTS profissional (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    empresa TEXT NOT NULL,
    cargo TEXT NOT NULL,
    periodo TEXT,
    descricao TEXT
  );

  CREATE TABLE IF NOT EXISTS projetos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    descricao TEXT,
    tecnologias TEXT,
    link TEXT
  );

`);

console.log("Banco de dados conectado!");

module.exports = db;