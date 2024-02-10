require("dotenv").config()
const express = require('express')
const app = express();
const cors = require('cors');
const ConnectDb = require('./db/Conn');
const Products = require('./models/ProductSchema')
const Defaultdata = require('./defaultdata')
const router = require('./routes/Router')
const port = process.env.PORT || 8080

app.use(cors());
app.use(express.json());
app.use("/amazon/web", router)

const start = async () => {
    ConnectDb(process.env.URL);
    app.listen(port, () => {
        console.log(`port is ready at ${port}`)
    })
    Defaultdata()
}
start()
