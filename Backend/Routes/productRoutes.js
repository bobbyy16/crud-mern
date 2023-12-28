const express = require('express');
const {getProducts, getProduct, createProduct, updateProduct, deleteProduct} = require('../Controllers/productController')

const router = express.Router();
// get all products
router.get('/', getProducts);
// get products by id
router.get('/:id', getProduct);
// Create product
router.post('/', createProduct);
// update a product
router.put('/:id', updateProduct);
// delete a product
router.delete('/:id', deleteProduct);

module.exports = router;