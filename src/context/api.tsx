import axios from "axios"

//"https://youtubeback-lm98.onrender.com/"
//"http://localhost:4000/"

const api = axios.create({
    baseURL: "http://localhost:4000/"
})

export default api
