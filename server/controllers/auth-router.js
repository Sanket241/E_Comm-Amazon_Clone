const getproducts = (req, resp) => {
    try {
        console.log("getproducts")
        resp.status(200).json({ msg: "shri ganesh" })
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