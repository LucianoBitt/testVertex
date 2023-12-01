import axios from "axios";
const conectApi = axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3"
})
export { conectApi }