// App.js
import React, { useState } from "react";
import "./Style.css";
import About from "./About";
import Skills from "./Skills"
import Projects from "./Project";
import Contact from "./Contact";
import Navigation from "./Navi";

function App() {
  const [page, setPage] = useState("home");

  const renderPage = () => {
    switch (page) {
      case "about":
        return <About />;
      case "skills":
        return <Skills />;
      case "projects":
        return <Projects />;
      case "contact":
        return <Contact />;
      default:
        return (
          <div className="home">
            <h1>Welcome to my Portfolio</h1>
            <h3>Hi There!
              This is Sheetal,<br /> I'm a Student
            </h3>
            <p>Feel free to explore my work and get in touch!</p>
          </div>
        );
    }
  };

  return (
    <div className="App">
      <Navigation setPage={setPage} />
      <header className="App-header">
        <h1>My Portfolio</h1>
      </header>
      <main>{renderPage()}</main>
    </div>
  );
}

export default App;