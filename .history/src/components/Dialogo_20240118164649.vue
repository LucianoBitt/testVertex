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
		<div>
			<h1></h1>
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
	@Prop

	// Outra maneira de criar uma prop e um emit ao mesmo tempo
	// @ModelSync("dialog", "clickbutton", { default: false }) setDialog
}
</script>