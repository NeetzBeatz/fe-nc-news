import { useEffect, useState } from "react";
import { getArticleById } from "../api";
import { Link, useParams } from "react-router-dom";
import moment from "moment";
import Loading from "./Loading";
import CommentsCard from "./CommentsCard";

function ArticleById() {
   const { articleId } = useParams();
   const [singleArticle, setSingleArticle] = useState([]);
   const [isLoading, setIsLoading] = useState(false);

   useEffect(() => {
      setIsLoading(true);
      getArticleById(articleId).then((article) => {
         setSingleArticle(article);
         setIsLoading(false);
      });
   }, [articleId]);

   if (isLoading) {
      return <Loading />;
   }

   if (!singleArticle) {
      return <h2>Article not found</h2>;
   }

   return (
      <section className="single-article-container">
         <h2 className="single-article-h2">{singleArticle.title}</h2>
         <br />
         <li className="articles-list" key={singleArticle.title}>
            <p className="single-article-identifiers">
               {singleArticle.topic} | Written by {singleArticle.author} |{" "}
               {moment(singleArticle.created_at).format("DD/MM/YYYY")}
            </p>
            <br />
            <br />
            <img
               className="single-article-imgs"
               src={singleArticle.article_img_url}
            />
            <p>{singleArticle.body}</p>
            <p className="likes-container">
               {singleArticle.votes} likes{" "}
               <button className="give-like-button">Like</button>
            </p>
            <p>{singleArticle.comment_count} comments</p>
            <form className="add-comment-container">
               <button className="add-comment-button">
                  <label htmlFor="add-comment-button">Add comment</label>
                  <br />
               </button>
               <input
                  type="text"
                  id="add-comment-form"
                  name="add-comment-form"
                  className="add-comment-form"
                  placeholder="add comment here"
               ></input>
            </form>
            <CommentsCard />
         </li>
      </section>
   );
}

export default ArticleById;
