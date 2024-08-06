import axios from "axios";

const api = axios.create({
    baseURL: "https://itsthenews.onrender.com/api"
})

export const getArticles = () => {
    return api.get("/articles")
    .then(response => {
        // console.log("hello from axios")
        return response.data.articles
    }).catch(error => {
        console.error(error)
    })
}