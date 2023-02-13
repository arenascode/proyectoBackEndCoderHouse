export default class Product {
  // Atributes
  title;
  description;
  price;
  thumbnail;
  code;
  stock;

  constructor({ title, description, price, thumbnail, code, stock }) {
    if (
      title === " " ||
      description === " " ||
      isNaN(price) ||
      thumbnail === " " ||
      code === " " ||
      isNaN(stock)
    ) {
      console.log("Please check fields!");
    } else {
      this.title = title;
      this.description = description;
      this.price = price;
      this.thumbnail = thumbnail;
      this.code = code;
      this.stock = stock;
    }
  }
}
