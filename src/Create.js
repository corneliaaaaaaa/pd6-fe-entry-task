import { useState } from "react";
import { useHistory } from "react-router-dom";
import addbg from "./img/contact-bg1.jpg";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [detail, setDetail] = useState("");
  const [author, setAuthor] = useState("pcat");
  const [date, setDate] = useState("July 4th, 2021");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, detail, body, author, date };

    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("new blog added!");
      history.push("/");
    });
  };

  return (
    <div className="create">
      <img src={addbg} alt="add post background" id="add-bg" />
      <h1>Add Post</h1>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>
        <label>Content</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <button className="send">SEND</button>
      </form>
    </div>
  );
};

export default Create;
