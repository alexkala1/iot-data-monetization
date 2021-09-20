<template>
	<v-row class="align-center justify-center wrap">
		<v-col cols="12" lg="5" md="6" class="pr-3 pl-6">
			<v-form
				ref="form"
				v-model="valid"
				lazy-validation
				@submit.prevent="submit"
			>
				<v-card rounded raised outlined>
					<v-card-title class="justify-center py-5 my-5">
						<h2
							class="font-weight-light text-center"
							style="word-break: break-word"
						>
							Login to my IoT Monetization
						</h2>
					</v-card-title>
					<v-card-text full-height>
						<v-text-field
							v-model="login.email"
							prepend-inner-icon="mdi mdi-account"
							label="Email"
							required
							:rules="emailRules"
							rounded
							outlined
							solo
							type="text"
							name="email"
						></v-text-field>

						<v-text-field
							v-model="login.password"
							prepend-inner-icon="mdi mdi-lock"
							label="Password"
							rounded
							outlined
							required
							:rules="passwordRules"
							solo
							type="password"
							name="password"
						></v-text-field>
					</v-card-text>
					<v-card-actions class="justify-center">
						<v-row no-gutters align="center" justify="center">
							<v-col cols="auto">
								<h2>
									No account?
									<NuxtLink to="/register">
										Register Now
									</NuxtLink>
								</h2>
							</v-col>
							<v-col cols="12">
								<v-btn type="submit" rounded raised block>
									<v-icon left>mdi-login</v-icon>
									Log in
								</v-btn>
							</v-col>
						</v-row>
					</v-card-actions>
				</v-card>
			</v-form>
		</v-col>
	</v-row>
</template>

<script>
export default {
	name: 'Login',
	components: {},
	data() {
		return {
			valid: true,
			login: {
				email: '',
				password: '',
			},
			emailRules: [
				(validation) => !!validation || 'E-mail is required',
				(validation) =>
					/.+@.+\..+/.test(validation) || 'E-mail must be valid',
			],
			passwordRules: [
				(validation) => !!validation || 'Password is required',
			],
		}
	},

	mounted() {},

	methods: {
		async submit() {
			if (this.$refs.form.validate()) {
				await this.$auth
					.loginWith('local', {
						data: this.login,
					})
					.then((response) => {
						this.$auth.setUserToken(response.data.token)
					})
			}
		},
	},
}
</script>
