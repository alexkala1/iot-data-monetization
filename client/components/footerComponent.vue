<template>
	<v-footer dark padless app absolute>
		<v-card
			flat
			tile
			class="white--text text-center"
			width="100%"
		>
			<v-card-text>
				This is a proof of concept project for the master in Advanced
				Technologies in Informatics and Computers created by Kalaitzidis
				Alexandros and Katsoulis Sokratis.
			</v-card-text>

			<v-divider></v-divider>

			<v-card-text class="white--text">
				{{ new Date().getFullYear() }},
				<strong>Kalaitzidis Alexandros — Katsoulis Sokratis</strong>
			</v-card-text>
		</v-card>
	</v-footer>
</template>

<script>
export default {
	data: () => ({}),
}
</script>
