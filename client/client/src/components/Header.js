import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [login, setLogin] = useState(localStorage.getItem("login"));
  return (
    <nav
      className="navbar navbar-expand-lg navigation-wrap "
      style={{ backgroundColor: "black" }}
    >
      <div className="container ">
        <Link className="navbar-brand text-white" to="/">
          contact manager App
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        ></button>
      </div>
    </nav>
  );
}
