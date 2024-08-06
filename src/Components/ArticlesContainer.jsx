import { useEffect, useState } from "react";
import { getArticles } from "../api";
import { useParams } from "react-router-dom";
import AllArticles from "./AllArticles";

function ArticlesContainer() {
   const { article } = useParams();
   const [allArticles, setAllArticles] = useState([]);

   //    console.log(allArticles);

   useEffect(() => {
      getArticles(article).then((articlesArray) => {
         setAllArticles(articlesArray);
      });
   }, []);

   return (
      <div>
         <AllArticles allArticles={allArticles} />
      </div>
   );
}

export default ArticlesContainer;
