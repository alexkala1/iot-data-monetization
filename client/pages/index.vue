<template>
	<v-container>
		<v-row align="center" justify="center">
			<v-col cols="auto">
				<v-card>
					<v-card-title>
						{{ $store.state.auth }}
					</v-card-title>
				</v-card>
			</v-col>
		</v-row>
	</v-container>
</template>
<script>
import axios from 'axios'
export default {
	middleware: ['auth'],
	data() {
		return {
			iotDevices: null,
		}
	},

	mounted() {
		this.getDevices()
	},

	methods: {
		async getDevices() {
			const { data } = await axios.get('http://0.0.0.0:1026')

			this.iotDevices = data
			console.log(this.iotDevices)
		},
	},
}
</script>
