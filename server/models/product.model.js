const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required."],
        minlength: [2, "Title must be at least two characters long."]
    },
    // I used ChatGPT to figure out how to best store currency using Mongoose.
    price: {
        type: Number,
        required: [true, "Price is required."],
        min: [0, "Price cannot be less than zero."],
        max: [1000000, "Price cannot be greater than 1,000,000."],
        // In the following functions, the user-entered price is converted to cents by multiplying it by 100. That number is actually stored as the "price." When the price needs to be displayed, it is retrieved as a number and converted to a string. If there is a function involving a string, a number, and a mathematical operator, JavaScript will convert the string to a number. This is called type coercion.  
        get: value => ( value / 100).toFixed(2),
        set: value => value * 100
    },
    description: {
        type: String,
        required: [true, "Description is required."],
        minlength: [10, "Description must be at least 10 characters long."],
        maxlength: [300, "Description must be less than 300 characters long."]
    }
}, {timestamps: true});

module.exports = mongoose.model("Product", ProductSchema);