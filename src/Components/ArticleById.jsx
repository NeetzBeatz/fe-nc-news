import { useEffect, useState } from "react";
import { getArticleById } from "../api";
import { Link, useParams } from "react-router-dom";
import moment from "moment";
import Loading from "./Loading";
import CommentsCard from "./CommentsCard";
import Votes from "./Votes";
import CommentForm from "./CommentForm";

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
      <section>
         <h2 id="article-titles">{singleArticle.title}</h2>
         <ul className="single-article-container">
            <li className="articles-list" key={singleArticle.title}>
               <p className="single-article-identifiers">
                  {singleArticle.topic} | Written by {singleArticle.author} |{" "}
                  {moment(singleArticle.created_at).format("DD/MM/YYYY")}
               </p>
               <img
                  className="single-article-imgs"
                  src={singleArticle.article_img_url}
               />
               <p>{singleArticle.body}</p>
               <Votes singleArticle={singleArticle} />
               <p className="number-of-comments">
                  {singleArticle.comment_count} comments
               </p>
               <CommentsCard />
            </li>
         </ul>
      </section>
   );
}

export default ArticleById;
