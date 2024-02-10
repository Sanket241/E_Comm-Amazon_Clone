const express = require('express')
const router = express.Router()

const Getrouter = require('../controllers/auth-router')

router.route("/testing").get(Getrouter.testing)
router.route("/getproducts").get(Getrouter.getproducts)


module.exports = router