<template>
	<v-container>
		<v-row align="center" justify="center">
			<v-col cols="auto">
				<v-form
					ref="form"
					v-model="valid"
					lazy-validation
					@submit.prevent="submit"
				>
					<v-card>
						<v-card-title class="justify-center">
							Add new device
						</v-card-title>
						<v-card-text>
							<v-text-field
								required
								v-model="newDevice.name"
								prepend-inner-icon="mdi mdi-account"
								label="Device Name"
								:rules="newDeviceRules.name"
								rounded
								outlined
								solo
								type="text"
								name="email"
							></v-text-field>
						</v-card-text>
					</v-card>
				</v-form>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
export default {}
</script>

<style></style>
