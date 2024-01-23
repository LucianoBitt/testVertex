<template>
  <div id="app">
    <h1>
      Search Vídeos
    </h1>
    <v-text-field type="text" outlined v-model="input"/>
    <v-btn dark color="#808080" @click="searchVideos">Buscar</v-btn>
    
    <div class="container">
      <Card
      v-for="{id, snippet} in data.items"
      :key="`card-${id.videoId}`"
      :titulo="snippet.title"
      :subtitulo="snippet.description"
      imagem="https://blog.oriontec.com.br/wp-content/uploads/2022/03/blog_tecnologia.jpg"
      @clickbutton="detalhes(id.videoId)"
      />
    </div>
    <Dialog 
    :dialog="dialogComponent"
    @clickbutton="closeDiolog()"
    />
  </div>
</template>
<!-- <script>
  import MixinBuscaApi from "@/plugins/mixins/MixinBuscaApi"
  import "@/style/app.styl"
  
export default {
  name: 'App',
  mixins: [MixinBuscaApi],
  components: {
    Card: () => import(
      '@/components/Card.vue'
    ),
    Dialog: () => import(
      '@/components/Dialogo.vue'
    )
  },
  data: () => {
    return {
      input: '',
      data: {},
      responseDetalhe: {},
      dialogComponent: false
    }
  },
  methods: {
    async searchVideos() {
      await this.buscarVideos(this.input)
        .then(res => {
          this.data = res
          console.log('Retorno Positivo', this.data)
        }).catch(/* EMPTY */)
    },
    async detalhes(id) {
      await this.buscarDetalhes(id)
        .then(res => {
          console.log(res.items[0])
          this.dialogComponent = true
        })
    },
    closeDiolog() {
      this.dialogComponent = false
    }
  },    
}
</script>  -->

<style scoped>
.container {
	width: 100%;
	max-width: 1440px;
	margin: 10px auto 0;
	display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
</style>

<script>
  import { mixins } from "vue-class-component"
  import { Component } from "vue-property-decorator"
  import MixinBuscaApi from "@/plugins/mixins/MixinBuscaApi"
  import "@/style/app.styl"

  @Component({
    components: {
      Card: () => import(
        '@/components/Card.vue'
      ),
      DialogDetalhes: () => import(
        '@/components/Dialogo.vue'
      ),
    }
  })

  export default class App extends mixins(
    MixinBuscaApi
  ) {
    input = ''
    data = []
    responseDetalhe = {}
    dialogComponent = false

    async searchVideos() {
      await this.buscarVideos(this.input)
        .then(res => {
          this.data = res
          console.log('Retorno Positivo', res)
        }).catch(/* EMPTY */)
    }
    
    async detalhes(id) {
      await this.buscarDetalhes(id)
        .then(res => {
          console.log(res.items[0]);
          this.dialogComponent = true
        })
    }

    closeDiolog() {
      this.dialogComponent = false
    }
  }
</script>

