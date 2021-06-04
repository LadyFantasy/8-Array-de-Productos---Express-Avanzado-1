const arrProds = require("./productos.json");

class Productos {
  constructor() {
    this.arrproductos = arrProds;
  }

  listar() {
    return this.arrproductos;
  }

  listarId(id) {
    const product = this.arrproductos.find(prod => {
      return prod.id == id;
    });
    return product;
  }

  guardar(body) {
    const { title, price, thumbnail } = body;
    const id = this.arrproductos.length + 1;
    const product = { title, price, thumbnail, id };

    this.arrproductos = [...arrProds, product];

    return product;
  }
}

// exporto una instancia de la clase
module.exports = Productos;
