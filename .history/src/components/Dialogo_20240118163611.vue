<template>
	<v-dialog
		v-model="setDialog"
		fullscreen
		hide-overlay
		transition="dialog-bottom-transition">
		
	<v-card>
		<v-toolbar dark color="primary">
			<v-btn
				icon
				dark
				@click.prevent="$emit('clickbutton')">
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
import { Component, ModelSync, Watch } from 'vue-property-decorator'
@Component({})

export default class DialogoDetalhes extends mixins() {
	@ModelSync("dialog", "clickbutton", { default: false }) setDialog
}
</script>