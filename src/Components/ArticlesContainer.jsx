import { useEffect, useState } from "react";
import { getArticles } from "../api";
import { useParams } from "react-router-dom";
import AllArticles from "./AllArticles";
import Loading from "./Loading";

function ArticlesContainer() {
   const { article } = useParams();
   const [allArticles, setAllArticles] = useState([]);
   const [isLoading, setIsLoading] = useState(false);

   useEffect(() => {
      setIsLoading(true);
      getArticles(article).then((articlesArray) => {
         setAllArticles(articlesArray);
         setIsLoading(false);
      });
   }, []);

   if (isLoading) {
      return <Loading />;
   }

   return (
      <div>
         <AllArticles allArticles={allArticles} />
      </div>
   );
}

export default ArticlesContainer;
