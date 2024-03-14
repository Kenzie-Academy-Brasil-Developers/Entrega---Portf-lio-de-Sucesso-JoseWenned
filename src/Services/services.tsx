import axios from "axios"

export const Api = axios.create({
    baseURL: "https://github.com/JoseWenned",
    timeout: 8000,
})