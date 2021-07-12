const User = require('../model/user')

const express = require('express')
const router = express.Router()

router.post('/', async (req, res) => {

})

// Get all users
router.get('/', async (req, res, next) => {
	try {
		const users = await User.find({})

		return res.json(users)
	} catch (error) {
		return res.json(error)
	}
})

// Get user by id
router.get('/:_id', async (req, res, next) => {
	try {
		const user = await User.findById(req.params._id)
		
		return res.json(user)
	} catch (error) {
		return res.json(error)
	}
})


router.put('/:id', async (req, res) => {

	let user = await User.findById(req.params.id)

	user.firstName = req.body.firstName
	user.lastName = req.body.lastName
	user.email = req.body.email

	await user.save()

	return res.json(user)
})

router.delete('/:id', (req, res) => {
	await User.findByIdAndRemove(req.params.id)

	return res.json({ message: "Deleted Successfully!" })
})

module.exports = router;