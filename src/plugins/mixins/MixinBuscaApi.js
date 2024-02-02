import { mixins } from "vue-class-component"
import { Component } from "vue-property-decorator"
import { conectApi } from "@/plugins/api/conectApi"

// /videos?id={VIDEO_ID}&part=snippet,statistics&key={API_KEY}
@Component({})

export default class MixinBuscaApi extends mixins() {
    async buscarVideos(input) {
        return conectApi.get(`/search?part=snippet&q=${input}&key=${process.env.VUE_APP_API_KEY}`)
            .then(res => {
                if ('data' in res) return res.data
            }).catch(err => console.log('err mixin search', err))
    }
    async buscarDetalhes(id) {
        return conectApi.get(`/videos?id=${id}&part=snippet,statistics&key=${process.env.VUE_APP_API_KEY}`)
            .then(res => {
                if ('data' in res) return res.data
            }).catch(err => console.log('err mixin search', err))
    }
    async pagination(termo, token) {
        return conectApi.get(`/search?part=id,snippet&q=${termo}&key=${process.env.VUE_APP_API_KEY}&maxResults=10&pageToken=${token}`)
            .then(res => {
                if ('data' in res) return res.data
            }).catch(err => console.log('err mixin search', err))
    }
}