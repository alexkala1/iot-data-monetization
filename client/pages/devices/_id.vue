<template>
	<v-container>
		<v-row align="center" justify="center">
			<v-col cols="12" md="6">
				<v-card>
					<v-card-title
						class="justify-center font-weight-light display-2"
					>
						Device #{{ $route.params.id }}
					</v-card-title>
					<v-card-text>
						<v-timeline align-top dense>
							<v-timeline-item
								v-for="message in messages"
								:key="message.time"
								:color="message.color"
								small
							>
								<div>
									<div class="font-weight-normal">
										<strong>{{ message.from }}</strong> @{{
											message.time
										}}
									</div>
									<div>{{ message.message }}</div>
								</div>
							</v-timeline-item>
						</v-timeline>
					</v-card-text>
					<v-divider></v-divider>
					<v-card-actions>
						<v-btn rounded color="orange darken-2">
							<v-icon left>mdi-delete</v-icon>
							Unsubscribe
						</v-btn>
						<v-btn rounded color="orange darken-2">
							<v-icon left> mdi-code-json </v-icon>
							Download JSON
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
		return {
			messages: [
				{
					from: 'You',
					message: `Sure, I'll see you later.`,
					time: '10:42am',
					color: 'deep-purple lighten-1',
				},
				{
					from: 'John Doe',
					message: 'Yeah, sure. Does 1:00pm work?',
					time: '10:37am',
					color: 'green',
				},
				{
					from: 'You',
					message: 'Did you still want to grab lunch today?',
					time: '9:47am',
					color: 'deep-purple lighten-1',
				},
			],
		}
	},
}
</script>

<style></style>
