import express from 'express';
import ProductManager  from './ProductManager.js';
import Product from './Product.js';

const app = express();

app.use(express.urlencoded({extended:true}))

const productsManager = new ProductManager('./Products.json')

console.log(productsManager.getProducts())


function controllerProducts(req, res) {
  const products = productsManager.getProducts()
      console.log(products)
      res.send(products)
}

app.get('/products', controllerProducts)

const port = 8080;

app.listen(port, () => {console.log("Conected wii!!")})
