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

// Update one product
module.exports.updateOneProduct = (req, res) => {
    Product.findByIdAndUpdate(req.params.id, req.body,{new: true, runValidators: true})
        .then(updatedProduct => {
            res.json(updatedProduct)
        })
        .catch(err => {
            res.json({message: "Something went wrong.", error: err})
        });
}

// Delete one product
module.exports.deleteOneProduct = (req, res) => {
    Product.findByIdAndDelete(req.params.id)
        .then(deleteConfirmation => res.json(deleteConfirmation))
        .catch(err => {
            res.json({message: "Something went wrong.", error: err})
        });
}