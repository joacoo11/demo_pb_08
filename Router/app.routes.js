const express = require('express')
const productsRoutes = require('./Products/products.routes')
const usersRoutes = require('./Users/users.routes')


const router = express.Router();

router.use('/products', productsRoutes)
router.use('/users', usersRoutes)


module.exports = router;