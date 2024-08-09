import ArticleCard from "./ArticleCard";

function AllArticles({ allArticles }) {
   return (
      <div>
         <h2 id="all-articles-h2">Current Articles</h2>
         <ul>
            {allArticles.map((article) => {
               return (
                  <ArticleCard key={article.article_id} article={article} />
               );
            })}
         </ul>
      </div>
   );
}

export default AllArticles;
