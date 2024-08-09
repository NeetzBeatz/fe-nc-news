import moment from "moment";
import { Link } from "react-router-dom";

function ArticleCard(props) {
   const { article } = props;
   return (
      <section className="articles-list">
         <Link to={`/articles/${article.article_id}`}>
            <ul>
               <li key={article.title}>
                  <button className="articles-button">
                     <h2 id="article-titles">{article.title}</h2>
                     <p>{article.topic.toUpperCase()}</p>
                     <p>Written by: {article.author}</p>
                     <p>
                        Votes:{""}
                        {article.votes}
                     </p>
                     <p>
                        Comments:{""}
                        {article.comment_count}
                     </p>
                     <p>
                        Posted:{""}
                        {moment(article.created_at).format("DD/MM/YYYY")}
                     </p>
                     <img
                        className="article-imgs"
                        src={article.article_img_url}
                     />
                  </button>
               </li>
            </ul>
         </Link>
      </section>
   );
}

export default ArticleCard;
