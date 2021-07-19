import { useHistory, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import fetchData from "./fetchData";
import editbg from "./img/contact-bg1.jpg";

const Edit = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  useEffect(() => {
    fetchData("http://localhost:8000/blogs/" + id, setBlog);
  }, []);

  const history = useHistory();
  const handleEdit = (e) => {
    e.preventDefault();

    fetch("http://localhost:8000/blogs/" + blog.id, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: title ? title : blog.title,
        body: body ? body : blog.body,
      }),
    }).then(() => {
      console.log("post edited!");
      history.go(-1);
    });
  };

  return (
    <div className="edit">
      <img src={editbg} alt="edit background" id="edit-bg" />
      <h1>Edit Post</h1>
      {blog ? (
        <form onSubmit={handleEdit}>
          <label>Title</label>
          <input
            type="text"
            defaultValue={blog.title}
            onChange={(e) => setTitle(e.target.value)}
          ></input>
          <label>Content</label>
          <textarea
            defaultValue={blog.body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
          <button className="send">SEND</button>
        </form>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Edit;
