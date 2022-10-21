const http = require("http");
const express = require("express");
var cors = require('cors');
const app = express();
app.use(express.json(),cors());


//tarjeta de cracion de permisos en base de datos
const mariadb = require("mariadb");
const pool = mariadb.createPool({
  host: "127.0.0.1",
  user: "root",
  password: "informatica",
  database:'piuno',
  port: 3307
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
  const stringQuery = `CALL contactos("${req.body.correo_electronico}","${req.body.numero_telefono}","${req.body.modelo_autos}","${req.body.modelo_motos}", "${req.body.interes_repuestos}","${req.body.interes_compra}","${req.body.interes_testdrive}", "${req.body.interes_informacion}","${req.body.ingrese_descripcion}");`;
  const rows = await conn.query(stringQuery)
})

//puerto
const port = process.env.port || 80;
app.listen(port, () => console.log("server iniciado"));

