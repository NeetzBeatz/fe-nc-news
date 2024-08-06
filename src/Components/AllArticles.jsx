import ArticleCard from "./ArticleCard";

function AllArticles({ allArticles }) {
   return (
      <div>
         <h2 id="articles-page-h2">Articles</h2>
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
