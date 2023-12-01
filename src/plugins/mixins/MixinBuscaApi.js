import { mixins } from "vue-class-component"
import { Component } from "vue-property-decorator"
import { conectApi } from "@/plugins/api/conectApi"

@Component({})

export default class MixinBuscaApi extends mixins() {
	async buscarVideos(input) {
		return conectApi.get(`/search?part=snippet&q=${input}&key=${process.env.VUE_APP_API_KEY}`)
			.then(res => {
				if ('data' in res) return res.data
			}).catch(err => console.log('err mixin search', err))
    }
}