const mongoose = require('mongoose');

const { Schema } = mongoose;

const UserSchema = new Schema({
	email: { type: String, required: true, unique: true },
	firstName: { type: String, required: true },
	lastName: { type: String, required: true },
	password: { type: String, required: true },
	wallet: { type: String, required: false }
});

module.exports = mongoose.model('User', UserSchema);
