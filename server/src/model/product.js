const mongoose = require('mongoose');

const { Schema } = mongoose;

const ProductSchema = new Schema({
	name: { type: String, required: true, unique: true },
	users_id: { type: Array },
	entries: { type: Array },
	wallet: { type: String, required: true }
});

module.exports = mongoose.model('Product', ProductSchema);
