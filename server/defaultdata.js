const Products = require('./models/ProductSchema')
const productsdata = require('./constant/productdata')
const Defaultdata = async () => {
    try {
        await Products.deleteMany({});
        const storedata = await Products.insertMany(productsdata)
    } catch (error) {
        console.log(error)
    }
}
module.exports = Defaultdata