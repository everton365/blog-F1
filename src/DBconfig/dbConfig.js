// dbConfig.ts
import { config } from "dotenv";
import pkg from "pg";
const { Pool } = pkg;

config(); // Carrega as variáveis de ambiente do arquivo .env

const pool = new Pool({
  host: "cbdhrtd93854d5.cluster-czrs8kj4isg7.us-east-1.rds.amazonaws.com",
  user: "ucklai902fsd3j",
  password: "p7bdc26aaee6398c95916ccd3f349d3788be4f4656744e3ae1003adfa93a54bd7",
  database: "d3pfj3b55j2pj",
  port: 5432, // Defina a porta se não estiver no padrão
  ssl: { rejectUnauthorized: false },
});
pool
  .connect()
  .then(async (client) => {
    console.log("Conexão com o banco de dados bem-sucedida!");
  })
  .catch((err) => console.error("Erro ao conectar ao banco de dados:", err));

export default pool;
