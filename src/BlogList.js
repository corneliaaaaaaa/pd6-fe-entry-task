import { Link } from "react-router-dom";

const BlogList = ({ blogs }) => {
  return (
    <div className="blog-list">
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h2 className="blogTitle">{blog.title}</h2>
            <h2 className="blogDetail">{blog.detail}</h2>
            <h4 className="authorAndDate">
              Posted by {blog.author} on {blog.date}
            </h4>
            <hr className="hr"></hr>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
