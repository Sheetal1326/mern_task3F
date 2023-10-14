// Navigation.js
import React from "react";

const Navigation = ({ setPage }) => {
  return (
    <nav>
      <ul>
        <li onClick={() => setPage("home")}>Home</li>
        <li onClick={() => setPage("about")}>About</li>
        <li onClick={() => setPage("skills")}>Skills</li>
        <li onClick={() => setPage("projects")}>Projects</li>
        <li onClick={() => setPage("contact")}>Contact</li>
      </ul>
    </nav>
  );
};

export default Navigation;