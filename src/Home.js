import BlogList from "./BlogList";
import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import fetchData from "./fetchData";
import homebg from "./img/home-bg1.jpg";

const Home = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchData("http://localhost:8000/blogs", setBlogs);
  }, []);

  const history = useHistory();

  const add = () => {
    history.push("/create");
  };

  return (
    <div className="home">
      <img src={homebg} alt="home background" id="home-bg" />
      <h1 className="pageBigTitle">My Blog</h1>
      <button onClick={add} className="button">
        Add Post
      </button>
      {blogs ? <BlogList blogs={blogs}></BlogList> : <div></div>}
    </div>
  );
};

export default Home;
