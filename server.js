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
});

//ruta de mostrar los autos en la pagina principal
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

//ruta de guardar
app.post("/contactanos", async(req, res)=>{
  conn = await pool.getConnection();
  const rows = await conn.query('CALL mostrar();');
  console.log(req.body)
})

//puerto
const port = process.env.port || 80;
app.listen(port, () => console.log("server iniciado"));

