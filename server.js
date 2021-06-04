const express = require("express");
const Productos = require("./api/productos");
const instanceProductos = new Productos();

// creo una app de tipo express
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/productos/listar", (req, res) => {
  const productos = instanceProductos.listar();
  res.json(productos.length > 0 ? productos : { error: "no hay productos cargados" });
});

app.get("/api/productos/listar/:id", (req, res) => {
  const id = req.params.id;
  const producto = instanceProductos.listarId(id);
  res.send(producto ?? { error: "producto no encontrado" });
});

app.post("/api/productos/guardar", (req, res) => {
  const body = req.body;
  const product = instanceProductos.guardar(body);
  res.send(product);
});

// pongo a escuchar el servidor en el puerto indicado
const puerto = 8080;

const server = app.listen(puerto, () => {
  console.log(`servidor escuchando en http://localhost:${puerto}`);
});

// en caso de error, avisar
server.on("error", error => {
  console.log("error en el servidor:", error);
});
