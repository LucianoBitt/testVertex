<template>
	<div>
		<div class="container-card">
			<div class="div">
				<img :src="imagem" alt="">
				<h3>{{ titulo }}</h3>
				<p>{{ subtitulo }}</p>
				<v-btn dark color="#002198"
				@click.prevent="$emit('clickbutton')">Detalhes</v-btn>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'cardComponets',
	props: ['titulo', 'subtitulo', 'imagem'],
	data: () => {
		return {
				
			}
		}
	}
</script>

<style scoped>
.container-card {
	padding: 15px;
	background-color: rgb(17, 137, 216);
	border-radius: 8px;
	margin: 10px;
}
.div {
	background-color: rgb(225, 237, 255);
	width: 100%;
	max-width: 280px;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-bottom: 5px;
}
.div img {
	width: 100%;
}
.div h3 {
	text-transform: uppercase;
	font-size: 13px;
}
.div p {
	font-size: 13px;
}
.div button {
	padding: 5px 10px;
	border-radius: 5px;
	border: none;
}
</style>