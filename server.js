const http = require("http");
const express = require("express");
var cors = require('cors');
const app = express();
app.use(express.json(),cors());


//tarjeta de cracion de permisos en base de datos
const mariadb = require("mariadb");
const pool = mariadb.createPool({
  host: "localhost",
  user: "root",
  password: "root",
  database:'piuno',
  connectionLimit: 100,
});

//ruta de prueba
app.get("/test", async (req, res) => {
  let conn;
  try {
    conn = await pool.getConnection();
    const rows = await conn.query('CALL mostrar();');
    res.json(rows[0])
  } catch (error) {
    res.json({error:error.message})
  }
});

//puerto
const port = process.env.port || 80;
app.listen(port, () => console.log("server iniciado"));

