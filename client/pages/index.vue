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
export default {
	middleware: ['auth'],
}
</script>
