const express = require('express')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const User = require('../model/user')
const mongoose = require('mongoose')

const router = express.Router()

// Register new user
router.post('/register', async (req, res) => {
	// Generate salt
	const salt = bcrypt.genSaltSync(10)

	// Hash the user password
	const hashedPassword = bcrypt.hashSync(req.body.password, salt)

	// Create a User object
	const user = new User({
		email: req.body.email,
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		userType: req.body.userType,
		password: hashedPassword,
	})

	// Save User in the database
	await user.save()

	return res.json(user)
})

router.post('/login', async (req, res) => {
	const user = await User.findOne({
		email: req.body.email,
	})

	console.log(user)

	// Check credentials
	try {
		if (bcrypt.compareSync(req.body.password, user.password) && user !== undefined) {
			// Sign user's email with jwt token
			const token = jwt.sign({ email: req.body.email }, process.env.ACCESS_TOKEN, { expiresIn: '15m' })

			// Create session user
			const response = {
				firstName: user.firstName,
				lastName: user.lastName,
				email: user.email,
				id: user._id,
				token,
			}

			return res.json(response)

		}
		else if (!bcrypt.compareSync(req.body.password, user.password))
			throw new Error('Λάθος κωδικός')

		else if (user === undefined)
			throw new Error('Δεν υφίσταται χρήστης με αυτό το email')

	} catch (error) {
		return res.status(403).json({ "error": "Wrong Credentials" })
	}
})

/**
 * This handles the check for user's JWT if exist and if
 * it is valid. Front logs user out in case something's wrong
 */
router.get('/fetchUser', (req, res) => {
	const authHeader = req.headers['authorization']
	const token = authHeader && authHeader.split(' ')[1]

	if (token === null) return res.send('fail')

	jwt.verify(token, process.env.ACCESS_TOKEN, async (err, user) => {
		if (err)
			return res.sendStatus(403)

		const userResponse = await User.findOne({ email: user.email }).select('-password -__v')

		return res.json({ user: userResponse })
	})
})

module.exports = router;