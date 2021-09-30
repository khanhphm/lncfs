import React, { useState } from "react";
import "./CommentInput.css";
import { db } from "../../firebase";
import AuthDialogs from "../../authModal";

function CommentInput({ comments, id, user }) {
  const [comment, setComment] = useState("");
  const [commentMap, setcommentMap] = useState(comments ? comments : []);

  const addComment = () => {
    // Add a new document in collection "cities"

    commentMap.push({
      comment: comment,
      username: user.displayName,
    });

    db.collection("posts")
      .doc(id)
      .update({
        comments: commentMap,
      })
      .then(function () {
        console.log("Document successfully written!");
      })
      .catch(function (error) {
        console.error("Error writing document: ", error);
      });

    setComment("");
  };

  return (
    <div >
    {user ? (
      <div className="commentInput">
       
      <textarea
        rows="1"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        className="commentInput__textarea"
        placeholder="Add a comment.."
      ></textarea>

      <button
        onClick={addComment}
        className="button commentInput__button"
        style={{
          color: comment ? "gray" : "lightgrey",
          fontWeight: comment ? "600" : "500",
        }}
      >
        Post
      </button>
      </div>
      
    ) : (
      <div
          style={{
            marginTop: "30px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <AuthDialogs label="Đăng Nhập/Đăng ký" />
          <p>để viết Comment</p>
      </div>
    )}

    </div>
  );
}

export default CommentInput;
