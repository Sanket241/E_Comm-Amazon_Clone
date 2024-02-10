const mongoose = require('mongoose')
const ConnectDb = async () => {
    try {
        await mongoose.connect(process.env.URL)
        console.log("Database all set")
    } catch (error) {
        console.log(error)
    }
}
module.exports = ConnectDb