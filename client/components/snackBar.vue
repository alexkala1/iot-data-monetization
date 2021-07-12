<template>
	<v-snackbar
		v-model="snackbar"
		top
		right
		:color="snackbarColor"
		vertical
		elevation="24"
	>
		{{ message }}

		<template #action="{ attrs }">
			<v-btn text v-bind="attrs" @click="snackbar = false"> Close </v-btn>
		</template>
	</v-snackbar>
</template>

<script>
export default {}
</script>

<style></style>
