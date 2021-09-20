<template>
	<v-container>
		<v-row align="center" justify="center">
			<v-col v-for="i in 5" :key="i" cols="12" sm="4">
				<v-card>
					<v-card-title> Device #{{ i }} </v-card-title>
					<v-card-text>
						<div>Device type: whatever</div>
						<div>Device entries: 124</div>
						<div>Device status: maybe</div>
						<div>Device subscription: payed</div>
					</v-card-text>
					<v-divider></v-divider>
					<v-card-actions>
						<v-btn rounded color="orange darken-2" :to="`/devices/${i}`">
							<v-icon left>mdi-chip</v-icon>
							Go to device
						</v-btn>
					</v-card-actions>
				</v-card>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
export default {
	middleware: ['auth'],
	data() {
		return {}
	},
}
</script>

<style></style>
