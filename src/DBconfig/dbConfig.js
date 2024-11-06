// dbConfig.ts
import { config } from "dotenv";
import pkg from "pg";
const { Pool } = pkg;

config(); // Carrega as variáveis de ambiente do arquivo .env

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: "85463083",
  database: "BLOGPOSTS",
  port: Number(process.env.DB_PORT) || 5432, // Defina a porta se não estiver no padrão
});
pool
  .connect()
  .then(async (client) => {
    console.log("Conexão com o banco de dados bem-sucedida!");
  })
  .catch((err) => console.error("Erro ao conectar ao banco de dados:", err));

export default pool;
