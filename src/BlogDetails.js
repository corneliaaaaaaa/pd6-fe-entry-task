import { useHistory, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CommentList from "./CommentList";
import fetchData from "./fetchData";
import postbg from "./img/post-bg1.jpg";

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    fetchData("http://localhost:8000/blogs/" + id, setBlog);
  }, []);

  const history = useHistory();
  const handleClick = () => {
    fetch("http://localhost:8000/blogs/" + blog.id, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    });
  };

  return (
    <div className="blog-details">
      <img src={postbg} alt="post background" id="post-bg" />
      {blog ? (
        <article>
          <h1>{blog.title}</h1>
          <h4>
            Posted by {blog.author} on {blog.date}
          </h4>
          <Link to={`/blogs/${blog.id}/edit`}>
            <button className="button-in-blog-detail" id="edit-button">
              Edit Post
            </button>
          </Link>
          <button
            onClick={handleClick}
            className="button-in-blog-detail"
            id="delete-button"
          >
            Delete Post
          </button>
          <div className="artcl">
            {blog.body ? (
              blog.body.split(/\n\n/).map((paragraph) => (
                <p className="p">
                  {paragraph}
                  <br />
                </p>
              ))
            ) : (
              <p></p>
            )}
          </div>
          <CommentList></CommentList>
        </article>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default BlogDetails;
