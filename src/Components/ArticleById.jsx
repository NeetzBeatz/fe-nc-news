import { useEffect, useState } from "react";
import { getArticleById } from "../api";
import { useParams } from "react-router-dom";
import moment from "moment";

function ArticleById() {
   const { articleId } = useParams();
   const [singleArticle, setSingleArticle] = useState([]);

   useEffect(() => {
      getArticleById(articleId).then((article) => {
         setSingleArticle(article);
      });
   }, [articleId]);

   if (!singleArticle) {
      return <h2>Article not found</h2>;
   }

   return (
      <div>
         <section className="single-article-container">
            <h2 className="single-article-h2">{singleArticle.title}</h2>
            <li className="articles-list" key={singleArticle.title}>
               <p>
                  <strong id="article-identifiers">
                     Topic: {singleArticle.topic}
                  </strong>
               </p>
               <p>
                  <strong id="article-identifiers">Posted: </strong>
                  {moment(singleArticle.created_at).format("DD/MM/YYYY")}
               </p>
               <p>
                  <strong id="article-identifiers">Written by: </strong>
                  {singleArticle.author}
               </p>
               <p>
                  <strong id="article-identifiers">Votes: </strong>
                  {singleArticle.votes}
               </p>
               <p>
                  <strong id="article-identifiers">Comments: </strong>
                  {singleArticle.comment_count}
               </p>
               <p>{singleArticle.body}</p>
               <br></br>
               <img
                  className="article-imgs"
                  src={singleArticle.article_img_url}
               />
            </li>
         </section>
      </div>
   );
}

export default ArticleById;
