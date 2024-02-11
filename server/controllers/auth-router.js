const Products = require('../models/ProductSchema')
const getproducts = async (req, resp) => {
    try {
        const response = await Products.find({})
        resp.status(200).json({ response })
    } catch (error) {
        console.log(error)
    }
}
const testing = (req, resp) => {
    try {
        console.log("testing")
        resp.status(200).json({ msg: "shri ganesh tetsing" })
    } catch (error) {
        console.log(error)
    }
}
module.exports = { testing, getproducts }