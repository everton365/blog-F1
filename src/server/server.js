// server.js
import express from "express";
import pool from "../DBconfig/dbConfig.js";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const app = express();
const PORT = 3030;
const blogPost = [];

// Middleware para parse do JSON
app.use(cors());

app.use(cors({ origin: 'http://localhost:8080' }));
app.use(express.json());

app.post("/blogPost", (req, res) => {
  const body = req.body;

  console.log(body);
});

// Rota para inserir um novo post no banco de dados
app.post("/api/posts", async (req, res) => {
  const {
    title,
    contenttext,
    author,
    urlimage,
    creditoimage,
    usuariosid,
    videourl,
    date,
  } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO blogposts (title, contenttext, author,creditoimage,urlimage, usuariosId,videourl,date) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *",
      [
        title,
        contenttext,
        author,
        creditoimage,
        urlimage,
        usuariosid,
        videourl,
        date,
      ]
    );
    res.status(201).json(result.rows[0]); // Retorna o post inserido
  } catch (error) {
    console.error("Erro ao inserir post:", error);
    res.status(500).json({ error: "Erro ao inserir post" });
  }
});

app.get("/api/post/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query("SELECT * FROM blogposts WHERE id = $1", [
      id,
    ]);
    if (result.rows.length > 0) {
      res.json(result.rows[0]); // Retorna o primeiro post encontrado
    } else {
      res.status(404).json({ error: "Post não encontrado." }); // Retorna erro se não encontrar
    }
  } catch (error) {
    console.error("Erro ao buscar o post:", error);
    res.status(500).json({ error: "Erro ao buscar o post." });
  }
});
app.get("/post", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM blogposts"); // Utilize pool.query
    res.json(result.rows); // Retorna os posts
  } catch (error) {
    console.error("Erro ao buscar os posts:", error);
    res.status(500).json({ message: error.message });
  }
});
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
