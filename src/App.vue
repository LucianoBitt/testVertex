<template>
  <div id="app">
    <h1>
      Search Vídeos
    </h1>   
    <input type="text" v-model="input">
    <button @click="searchVideos">Chamar</button>
  </div>
</template>

<script>
  import { mixins } from "vue-class-component"
  import { Component } from "vue-property-decorator"
  import MixinBuscaApi from "@/plugins/mixins/MixinBuscaApi"
  import "@/style/app.styl"

  @Component({})

  export default class App extends mixins(
    MixinBuscaApi
  ) {
    input = ''
    data = []

    async searchVideos() {
      await this.buscarVideos(this.input)
        .then(res => {
          this.data = { ...res }
        }).catch(/* EMPTY */)
    }
  }
</script>

