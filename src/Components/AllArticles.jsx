import moment from "moment";

function AllArticles({ allArticles }) {
   return (
      <div>
         <h2 id="articles-page-h2">Articles</h2>
         <ul>
            {allArticles.map((article) => {
               return (
                  <li className="articles-list" key={article.title}>
                     <button className="articles-button">
                        <h3 id="article-titles">{article.title}</h3>
                        <p>
                           <strong id="article-identifiers">
                              {article.topic.toUpperCase()}
                           </strong>
                        </p>
                        <p>
                           <strong id="article-identifiers">
                              Written by:{" "}
                           </strong>
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
                           {moment(article.created_at).format("MM/DD/YYYY")}
                        </p>
                        <br></br>
                        <img
                           className="article-imgs"
                           src={article.article_img_url}
                        />
                     </button>
                  </li>
               );
            })}
         </ul>
      </div>
   );
}

export default AllArticles;
