import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="link">
        <Link to="/" id="homeText">
          Home
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
