import { useState } from "react";
import { postCommentByArticleId } from "../api";

function CommentForm({ setComments, articleId }) {
   const [username, setUsername] = useState("jessjelly");
   const [comment, setComment] = useState("");
   const [success, setSuccess] = useState(false);

   function handleChangeComment(event) {
      const value = event.target.value;
      setComment(value);
   }

   function handleSubmit(event) {
      const newComment = {
         username: username,
         body: comment,
      };

      event.preventDefault();
      postCommentByArticleId(articleId, newComment).then((newComment) => {
         setComments((currComments) => {
            return [newComment, ...currComments];
         });
      });
      setSuccess(true);
      setComment("");
   }

   return (
      <div>
         <form className="add-comment-container" onSubmit={handleSubmit}>
            <h3>Comment on this article</h3>
            <p>Username: {username}</p>
            <label htmlFor="comment">
               Comment{"  "}
               <input
                  type="text"
                  name="add-comment-form"
                  placeholder="add comment here"
                  id="add-comment-form"
                  onChange={handleChangeComment}
               ></input>
            </label>
            <button className="submit-comment-button">
               <label htmlFor="submit-comment-button">Submit</label>
            </button>
         </form>
         {success ? <p>Your comment has been posted</p> : null}
      </div>
   );
}

export default CommentForm;
