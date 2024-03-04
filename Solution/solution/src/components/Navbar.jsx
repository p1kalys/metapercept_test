import React from "react";
import "../components/Navbar.css";
const Navbar = () => {
  return (
    <div>
      <nav>
        <ul className="top">
          <div>
            <p> Title </p>
          </div>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Blog</li>
            <li>Contact</li>
            <button className="buttn">Button</button>
          </ul>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
