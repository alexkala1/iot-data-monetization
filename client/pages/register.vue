<template>
	<v-container fill-height>
		<v-row justify="center">
			<v-col cols="6">
				<v-form
					ref="form"
					v-model="valid"
					lazy-validation
					@submit.prevent="submit"
				>
					<v-card>
						<v-card-title class="justify-center display-2">
							Register to iot-monetization
						</v-card-title>
						<v-spacer></v-spacer>
						<v-card-text>
							<v-text-field
								v-model="register.email"
								required
								prepend-inner-icon="mdi-at"
								:rules="rules.emailRules"
								label="Email"
								rounded
								filled
								solo
								type="text"
								name="email"
							></v-text-field>
							<v-text-field
								v-model="register.firstName"
								required
								prepend-inner-icon="mdi-account"
								:rules="rules.nameRules"
								label="First Name"
								rounded
								filled
								solo
								type="text"
								name="firstName"
							></v-text-field>
							<v-text-field
								v-model="register.lastName"
								required
								prepend-inner-icon="mdi-account"
								:rules="rules.lastNameRules"
								label="Last Name"
								rounded
								filled
								solo
								type="text"
								name="lastName"
							></v-text-field>
							<v-text-field
								v-model="register.password"
								required
								prepend-inner-icon="mdi-lock"
								:rules="rules.passwordRules"
								label="Password"
								rounded
								filled
								solo
								type="password"
								name="password"
							></v-text-field>
							<v-text-field
								v-model="register.passwordConfirm"
								required
								prepend-inner-icon="mdi-lock"
								:rules="rules.passwordConfirmRules"
								label="Confirm Password"
								rounded
								filled
								solo
								type="password"
								name="passwordConfirm"
							></v-text-field>
						</v-card-text>
						<v-divider></v-divider>
						<v-card-actions class="justify-center">
							<v-btn rounded type="submit">
								<v-icon left>mdi-login-variant</v-icon>
								Submit
							</v-btn>
						</v-card-actions>
					</v-card>
				</v-form>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
export default {
	name: 'Register',
	components: {},
	data() {
		return {
			register: {
				email: '',
				firstName: '',
				lastName: '',
				userType: 'admin',
				password: '',
				passwordConfirm: '',
			},
			valid: true,
			showError: false,
			rules: {
				nameRules: [(v) => !!v || 'First name is required'],
				lastNameRules: [(v) => !!v || 'Last Name is required'],
				emailRules: [
					(v) => !!v || 'Email is required',
					(v) => /.+@.+\..+/.test(v) || 'Email must be valid',
				],
				passwordRules: [(v) => !!v || 'Password is required'],
				passwordConfirmRules: [
					(v) => !!v || 'Confirm Password is required',
					(v) =>
						v === this.register.password ||
						'Passwords do not match',
				],
			},
		}
	},

	mounted() {
		console.log(this.$refs.form)
	},

	methods: {
		async submit() {
			if (this.$refs.form.validate()) {
				await this.$axios
					.post('/auth/register', this.register)
					.then((response) => {
						this.$router.push('/login')
					})
					.catch(console.error)
			}
		},
	},
}
</script>
