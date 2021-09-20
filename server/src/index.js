const app = require('./app')
const mongoose = require('mongoose')

mongoose
	.connect('mongodb://mongo/iot-monetization', {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: false,
		useCreateIndex: true,
	})
	.then(() => console.log('Database Connected'))
	.catch((err) => console.log(err))

const port = process.env.PORT || 5000
app.listen(port, () => {
	/* eslint-disable no-console */
	console.log(`Listening: http://localhost:${port}`)
	/* eslint-enable no-console */
})
