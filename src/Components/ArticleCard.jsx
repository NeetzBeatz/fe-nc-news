import moment from "moment";
import { Link } from "react-router-dom";

function ArticleCard(props) {
   const { article } = props;
   return (
      <section className="article-card">
         <Link to={`/articles/${article.article_id}`}>
            <li className="articles-list" key={article.title}>
               <button className="articles-button">
                  <h2 id="article-titles">{article.title}</h2>
                  <p>
                     <strong id="article-identifiers">
                        {article.topic.toUpperCase()}
                     </strong>
                  </p>
                  <p>
                     <strong id="article-identifiers">Written by: </strong>
                     {article.author}
                  </p>
                  <p>
                     <strong id="article-identifiers">Votes: </strong>
                     {article.votes}
                  </p>
                  <p>
                     <strong id="article-identifiers">Comments: </strong>
                     {article.comment_count}
                  </p>
                  <p>
                     <strong id="article-identifiers">Posted: </strong>
                     {moment(article.created_at).format("DD/MM/YYYY")}
                  </p>
                  <br></br>
                  <img className="article-imgs" src={article.article_img_url} />
               </button>
            </li>
         </Link>
      </section>
   );
}

export default ArticleCard;
