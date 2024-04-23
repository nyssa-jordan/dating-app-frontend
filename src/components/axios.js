import axios from 'axios'
const instance = axios.create({
baseURL: "https://dating-app-backend-bxvk.onrender.com"
})
export default instance