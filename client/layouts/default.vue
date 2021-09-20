<template>
	<v-app dark>
		<header-component v-if="$auth.loggedIn" />
		<v-main>
			<v-container fluid fill-height>
				<!-- <snack-bar /> -->
				<Nuxt />
			</v-container>
		</v-main>
		<footer-component />
	</v-app>
</template>

<script>
import footerComponent from '../components/footerComponent.vue'
import headerComponent from '../components/headerComponent.vue'
// import snackBar from '../components/snackBar.vue'
export default {
	components: { headerComponent, footerComponent },
	data() {
		return {}
	},
}
</script>
