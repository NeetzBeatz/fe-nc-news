import axios from "axios";

const api = axios.create({
    baseURL: "https://itsthenews.onrender.com/api"
})

export const getArticles = () => {
    return api.get("/articles")
    .then(response => {
        return response.data.articles
    }).catch(error => {
        console.log("error getting articles", error)
        throw error;
    });
}

export const getArticleById = (articleId) => {
    return api.get(`/articles/${articleId}`)
    .then(response => {
        return response.data.article
    }).catch(error => {
        console.log("error getting article", error)
        throw error;
    });
};

export const getCommentsByArticleId = (articleId) => {
    return api.get(`/articles/${articleId}/comments`)
    .then(response => {
        return response.data.comments
    }).catch(error => {
        console.log("error getting comments for this article", error)
        throw error;
    });
};

export const updateVotesByArticleId = (articleId) => {
    return api.patch(`/articles/${articleId}`, {inc_votes: 1}).then(() => {
        console.log("data fetched")
    })
};

export const postCommentByArticleId = (articleId, newComment ) => {
    return api.post(`/articles/${articleId}/comments`, newComment).then((response) => {
        return response.data.comment;
    }).catch((err) => {
        console.log(err)
        return err;
    })
}

// export const deleteComment = (username, comment_id) => {
//     return api.delete(`/comments/${comment_id}`)
//     .then(response => {
//         return response.data.comments
//     }).catch(error => {
//         console.log("error getting comments for this article", error)
//         throw error;
//     });
// };