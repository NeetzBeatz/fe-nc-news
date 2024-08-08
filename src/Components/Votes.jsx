import { updateVotesByArticleId } from "../api";
import { useState } from "react";

function Votes({ singleArticle }) {
   const [optimisticVotes, setOptimisticVotes] = useState(0);

   const incrementVotes = () => {
      setOptimisticVotes((currOptimisticVotes) => {
         return currOptimisticVotes + 1;
      });
      updateVotesByArticleId(singleArticle.article_id).catch(() => {
         setOptimisticVotes((currOptimisticVotes) => {
            return currOptimisticVotes - 1;
         });
         <p>something is wrong</p>;
      });
   };

   return (
      <div>
         <p className="likes-container">
            {singleArticle.votes + optimisticVotes} likes
            <button onClick={incrementVotes} className="give-like-button">
               Like
            </button>
         </p>
      </div>
   );
}

export default Votes;
