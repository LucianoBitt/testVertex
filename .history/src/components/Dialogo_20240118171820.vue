<template>
	<v-dialog
		v-model="dialog"
		fullscreen
		hide-overlay
		transition="dialog-bottom-transition">		
	<v-card>
		<v-toolbar dark color="primary" class="d-flex justify-space-between" width="100%">
			<v-spacer></v-spacer>
			<v-btn
				icon
				dark
				text
				fab
				@click.prevent="$emit('clickbutton')">
				<v-icon>mdi-close</v-icon>
			</v-btn>
			<v-spacer></v-spacer>			  
		</v-toolbar>
		<div class="fix-dialog">
			<iframe :src="`https://www.youtube.com/embed/${}`" frameborder="0"></iframe>
			<h2>{{ title }}</h2>
			<p>{{ description }}</p>
		</div>		
		</v-card>
	</v-dialog>
</template>

<script>
import { mixins } from 'vue-class-component'
import { Component, Prop, Emit } from 'vue-property-decorator'
@Component({})

export default class DialogoDetalhes extends mixins() {
	@Emit('clickbutton')
	@Prop({ default: false }) dialog
	@Prop({ default: '' }) title
	@Prop({ default: '' }) description
	@Prop({ default: '' }) videoId

	// Outra maneira de criar uma prop e um emit ao mesmo tempo
	// @ModelSync("dialog", "clickbutton", { default: false }) setDialog
}
</script>

<style scoped>
	.fix-dialog {
		margin-top: 30px;
	}

	.fix-dialog p {
		margin-top: 30px;
	}
</style>