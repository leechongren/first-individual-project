import axios from "axios";

const instance = axios.create({
    baseURL: "https://cr-simple-rpg.herokuapp.com/",
});
instance.defaults.headers.post["Content-Type"] = "application/json";
instance.defaults.withCredentials = true;


export default instance;