const express = require('express')
const router = express.Router()
const productController = require('../controller/product')

router.get('/', productController.getData)
router.post('/', productController.addData)
router.put('/:id', productController.updateData)
router.delete('/:idProduct', productController.deleteData)

module.exports = router