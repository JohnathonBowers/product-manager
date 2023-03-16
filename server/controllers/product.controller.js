const Product = require("../models/product.model");

// Create new product
module.exports.createNewProduct = (req, res) => {
    Product.exists({title: req.body.title})
        .then(productExists => {
            if (productExists) {
                return Promise.reject("Product already exists.");
            }
            return Product.create(req.body);
        })
        .then(newlyCreatedProduct => {
            res.json({newlyCreatedProduct})
        })
        .catch(err => {
            res.json({message: "Something went wrong.", error: err})
        })
}

// Get all products
module.exports.findAllProducts = (req, res) => {
    Product.find({})
        .then(allProducts => {
            res.json(allProducts)
        })
        .catch(err => {
            res.json({message: "Something went wrong.", error: err})
        });
}

// Get one product
module.exports.findOneProduct = (req, res) => {
    Product.findById(req.params.id)
        .then(oneProduct => {
            res.json(oneProduct)
        })
        .catch(err => {
            res.json({message: "Something went wrong.", error: err})
        });
}