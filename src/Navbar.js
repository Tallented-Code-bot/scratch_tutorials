import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav class="navbar">
      <h1>Scratch Tutorials</h1>
      <Link to="/">Home</Link>
      <Link to="/create">Create</Link>
      <Link to="/browse">Browse</Link>

      <Link to="/login">Login</Link>
      <Link to="/about">About</Link>
    </nav>
  );
};

export default Navbar;
