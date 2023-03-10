import fs from "fs";
import Product from "./Product.js";

class ProductManager {
  // Atributes
  products;
  path;

  constructor(path) {
    
    // if (!fs.existsSync(this.path)) {
    //   fs.writeFileSync(this.path, JSON.stringify([]));
    // }

    this.path = path;
  }

  // Methods
  async addProduct({ title, description, price, thumbnail, code, stock }) {
    const product = new Product({
      title,
      description,
      price,
      thumbnail,
      code,
      stock,
    });

    // const products = [];

    const readProducts = JSON.parse(
      await fs.promises.readFile(this.path, "utf-8")
    );

    // console.log(readProducts)

    const productExists = Boolean(readProducts.find((e) => e.code === code));

    if (productExists) {
      console.log("this product already exist");
    } else {
      if (readProducts.length === 0) {
        product.id = 1;
      } else {
        product.id = readProducts[readProducts.length - 1].id + 1;
      }
      readProducts.push(product);
      await fs.promises.writeFile(this.path, JSON.stringify(readProducts));
    }
  }

  async getProducts() {
    const showProducts = JSON.parse(
      await fs.promises.readFile(this.path, "utf-8")
    );
    return showProducts;
  }

  async getProductById(id) {
    const showProducts = JSON.parse(
      await fs.promises.readFile(this.path, "utf-8")
    );
    const productById = showProducts.find((e) => e.id === id);
    if (!productById) {
      console.log("this product doesn't exist");
    } else {
      return productById;
    }
  }

  async updateProduct(id, dataToUpdate) {
    const products = JSON.parse(await fs.promises.readFile(this.path, "utf-8"));
    let newData = products.filter((p) => p.id !== id);
    let updateData = [...newData, { id, ...dataToUpdate }];
    await fs.promises.writeFile(this.path, JSON.stringify(updateData));
  }

  async deleteProductbyId(id) {
    const products = JSON.parse(await fs.promises.readFile(this.path, "utf-8"));
    let arrayAfterDelete = products.filter((p) => p.id !== id);
    await fs.promises.writeFile(this.path, JSON.stringify(arrayAfterDelete));
  }
}

const productsManager = new ProductManager("./Products.json");

(async () => {
  await productsManager.addProduct({
    title: "zapato",
    description: "minimalista",
    price: 150,
    thumbnail: "Sin Ruta",
    code: 1,
    stock: 50,
  });
  await productsManager.addProduct({
    title: "Gorra",
    description: "Lengueta",
    price: 50,
    thumbnail: "Sin Ruta",
    code: 2,
    stock: 50,
  });
  await productsManager.addProduct({
    title: "Remera",
    description: "estampada",
    price: 70,
    thumbnail: "Sin Ruta",
    code: 3,
    stock: 50,
  });
  await productsManager.addProduct({
    title: "Pantalon",
    description: "estampada",
    price: 70,
    thumbnail: "Sin Ruta",
    code: 4,
    stock: 50,
  });
  await productsManager.addProduct({
    title: "Pulsera",
    description: "estampada",
    price: 70,
    thumbnail: "Sin Ruta",
    code: 5,
    stock: 50,
  });
  await productsManager.addProduct({
    title: "Musculosa",
    description: "estampada",
    price: 70,
    thumbnail: "Sin Ruta",
    code: 6,
    stock: 50,
  });
  await productsManager.addProduct({
    title: "Short",
    description: "Jean",
    price: 70,
    thumbnail: "Sin Ruta",
    code: 7,
    stock: 50,
  });
  await productsManager.addProduct({
    title: "Calcetines",
    description: "estampada",
    price: 70,
    thumbnail: "Sin Ruta",
    code: 8,
    stock: 50,
  });
  await productsManager.addProduct({
    title: "Reloj",
    description: "Oro",
    price: 70,
    thumbnail: "Sin Ruta",
    code: 9,
    stock: 50,
  });
  await productsManager.addProduct({
    title: "Corbata",
    description: "estampada",
    price: 70,
    thumbnail: "Sin Ruta",
    code: 10,
    stock: 50,
  });
})();

export default ProductManager