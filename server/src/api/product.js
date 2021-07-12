const Product = require('../model/product')
const express = require('express')
const router = express.Router()

router.post('/', async (req, res) => {

})

// Get all products
router.get('/', async (req, res, next) => {
	try {
		const products = await Product.find({})

		return res.json(products)
	} catch (error) {
		return res.json(error)
	}
})

// Get product by id
router.get('/:_id', async (req, res, next) => {
	try {
		const product = await Product.findById(req.params._id)
		
		return res.json(product)
	} catch (error) {
		return res.json(error)
	}
})


router.put('/:id', (req, res) => {
	
})

router.delete('/:id', (req, res) => {
	
})

module.exports = router;