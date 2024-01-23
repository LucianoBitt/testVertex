<template>
  <v-app>
    <div id="app">
      <div class="container-pesquisa">
      <h1>
        Buscar Vídeos
      </h1>
      <v-text-field class="fix-text-fild" type="text" outlined v-model="input" color="grey"/>
      <v-btn large dark color="timblack-primary" @click="searchVideos">
        <span 
          class="font-weight-bold"
          style="font-size: 18px;"
          v-text="'Buscar'"
        />
      </v-btn>
    </div>
      
      <div class="container">
        <Card
        v-for="{id, snippet} in data.items"
        :key="`card-${id.videoId}`"
        :titulo="snippet.title"
        :subtitulo="snippet.description"
        :imagem="snippet.thumbnails.high.url"
        @clickbutton="detalhes(id.videoId)"
        />
      </div>
      <DialogDetalhes
      v-if="responseDetalhe && responseDetalhe.snippet"
      :dialog="dialogComponent"
      :videoId="responseDetalhe.id"
      :title="responseDetalhe.snippet.title"
      :description="responseDetalhe.snippet.description"
      :commentCount="responseDetalhe.statistics.commentCount"
      :likeCount="responseDetalhe.statistics.likeCount"
      :viewCount="responseDetalhe.statistics.viewCount"
      @clickbutton="closeDiolog()"
      />
    </div>
  </v-app>
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
        }).catch(/* EMPTY */)
    }
    
    async detalhes(id) {
      await this.buscarDetalhes(id)
        .then(res => {
          console.log(res.items[0]);
          this.responseDetalhe = res.items[0]
          this.dialogComponent = true
        })
    }

    closeDiolog() {
      this.dialogComponent = false
    }
  }
</script>

