<template>
	<v-dialog
		v-model="dialog"
		fullscreen
		hide-overlay
		transition="dialog-bottom-transition">
		
	<v-card>
		<v-toolbar dark color="primary">
			<v-btn
				icon
				dark
				@click.pre="$emit('clickbutton')">
				<v-icon>mdi-close</v-icon>
			</v-btn>
			<v-toolbar-title>Settings</v-toolbar-title>
			<v-spacer></v-spacer>			  
		</v-toolbar>			
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
}
</script>