const ProductController = require("../controllers/product.controller");

module.exports = app => {
    app.get("/api/products", ProductController.findAllProducts);
    app.put("/api/products", ProductController.createNewProduct);
}