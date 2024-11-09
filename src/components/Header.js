import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1>
        Plantsy <span className="logo" role="img">🌱</span>
      </h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          {/* Add more links as needed */}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
