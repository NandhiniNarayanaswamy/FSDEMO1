import axios from "axios";

//set the baseURL for thr backend api
const api = axios.create({
    baseURL: "https://fsdemo1-2.onrender.com/api",
})
export default api;