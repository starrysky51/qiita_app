import { process } from "ipaddr.js";

export default function({ $axios }) {
    $axios.onRequest((config) => {
        if (process.env.QIITA_TOKEN) {
            config.headers.common['Aothorization'] = process.env.QIITA_TOKEN
        }
        return config
    })
}