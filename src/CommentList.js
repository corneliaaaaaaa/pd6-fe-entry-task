import { useEffect, useState } from "react";
import fetchData from "./fetchData";

const CommentList = () => {
  const [account, setAccount] = useState("");
  const [message, setMessage] = useState("");
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchData("http://localhost:8000/comments", setComments);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const comment = { account, message };
    setComments([...comments, comment]);

    fetch("http://localhost:8000/comments/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(comment),
    });
  };

  return (
    <div className="comment-list">
      {comments ? (
        comments.map((comment) => (
          <div className="comment-preview">
            <h4 id="account">
              {comment.account}
              {console.log(comment.account)}
            </h4>
            <h4 id="message">
              {comment.message}
              {console.log(comment.message)}
            </h4>
          </div>
        ))
      ) : (
        <div></div>
      )}
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          required
          value={account}
          onChange={(e) => setAccount(e.target.value)}
          id="name-input"
        ></input>
        <label>Messages</label>
        <input
          type="text"
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></input>
        <button className="send">SEND</button>
      </form>
    </div>
  );
};

export default CommentList;
