const mongoose = require('mongoose')


const productSchemas = new mongoose.Schema({
    id: String,
    url: String,
    detailsUrl: String,
    title: Object,
    price: Object,
    description: String,
    discount: String,
    tagline: String
})
const Products = new mongoose.model("products", productSchemas)
module.exports = Products;