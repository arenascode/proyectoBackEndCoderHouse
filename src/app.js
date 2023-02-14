import express from 'express';
import ProductManager from './ProductManager.js';

const app = express();

app.use(express.urlencoded({extended:true}))

const productsManager = new ProductManager('Products.json')


async function controllerProducts(req, res) {
  const limit = req.query.limit
  const products = await productsManager.getProducts()
  console.log(products)
  if (limit) {
    const filteredProducts = products.splice(0, limit)
    res.send(filteredProducts)
  }
  else {
    res.send(products)
  }
}

app.get('/products', controllerProducts)

app.get("/products/:limit", controllerProducts);

async function controllerProductById(req, res) {
  const productId = parseInt(req.params.pid)
  const productById = await productsManager.getProductById(productId)
  res.send(productById)
}
app.get('/products/:pid', controllerProductById)

const port = 8080;

app.listen(port, () => {console.log("Conected wii!!")})
