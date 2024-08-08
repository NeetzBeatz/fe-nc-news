import moment from "moment";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCommentsByArticleId } from "../api";

function CommentsCard() {
   const { articleId } = useParams();
   const [comments, setComments] = useState([]);

   useEffect(() => {
      getCommentsByArticleId(articleId).then((article) => {
         setComments(article);
      });
   }, [articleId]);

   if (!comments) {
      return <h2>No comments found for this article</h2>;
   }

   return (
      <section className="comments-card">
         <ul>
            {comments.map((comment) => {
               return (
                  <li className="comments-list" key={comment.comment_id}>
                     <h3 id="comment-author">{comment.author}</h3>
                     <p>Votes: {comment.votes}</p>
                     <p>
                        Posted:{" "}
                        {moment(comment.created_at).format("DD/MM/YYYY")}
                     </p>
                     <p>{comment.body}</p>
                  </li>
               );
            })}
         </ul>
      </section>
   );
}

export default CommentsCard;
