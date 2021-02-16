import React from "react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div>
      <nav className="navigation container">
        <div className="nav-brand">
          <strong>
            <a className="link" href="https://dz6om.csb.app/">
              ManishKumar
            </a>
          </strong>{" "}
        </div>

        <ul className="list-non-bullet nav-pills">
          <li className="list-item-inline">
            <Link className="link link-active" to="/">
              Home
            </Link>
          </li>
          <li className="list-item-inline">
            <Link className="link" to="/Projects">
              Projects
            </Link>
          </li>
          <li className="list-item-inline">
            <Link className="link" to="/blogs">
              Blogs
            </Link>
          </li>
          <li className="list-item-inline">
            <Link className="link" to="/About">
              About me
            </Link>
          </li>
        </ul>
      </nav>
      <body>
        <div className="clr-section">
          <header className="hero">
            <img className="hero-img" src="images/heroine.svg" />
            <h1 className="hero-heading">
              Manish Kumar <span className="heading-inverted">Portfolio</span>
            </h1>
          </header>
          <br />
          <section className="section ow">
            <div className="container-center">
              <br />
              <h1>Technologies</h1>
              <p>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Arrow_east.svg/1280px-Arrow_east.svg.png"
                  alt=""
                  className="arrow"
                />{" "}
                I'm familiar with HTML5, CSS3, Sass, Git, JavaScript, NodeJS,
                ReactJS, and web Hosting. I have good hand on C, C++ and python
                programming language. I can also work with databases like MySQL{" "}
              </p>
              <br />
            </div>
          </section>
          <br />
          <section className="section">
            <div className="container-center">
              <br />
              <h1>Projects</h1>
              <p>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Arrow_east.svg/1280px-Arrow_east.svg.png"
                  alt=""
                  className="arrow"
                />{" "}
                I like to showcase my work and thus, you can easily see my
                projects hosted online
              </p>
              <a className="link link-primary" href="/projects.html">
                SEE PROJECTS
              </a>
              <br />
            </div>
          </section>

          <br />

          <section className="section ow">
            <div className="container-center">
              <br />
              <h1>Blogs</h1>
              <p>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Arrow_east.svg/1280px-Arrow_east.svg.png"
                  alt=""
                  className="arrow"
                />{" "}
                I am also working on some technical and non technical blogs. I
                like to document my journey of learning.
              </p>
              <a className="link link-secondary" href="/blogs.html">
                READ BLOGS
              </a>
              <br />
            </div>
          </section>
          <br />
        </div>
        <br />

        <footer className="footer">
          <div className="footer-header">Socially connect with me</div>
          <ul className="social-links list-non-bullet">
            <li className="list-item-inline">
              <a className="link" href="https://github.com/manishk-99">
                github
              </a>
            </li>
            <li className="list-item-inline">
              <a className="link" href="https://twitter.com/Beingmanishh">
                twitter
              </a>
            </li>
            <li className="list-item-inline">
              <a
                className="link"
                href="https://www.linkedin.com/in/manish-kumar18"
              >
                linkedin
              </a>
            </li>
          </ul>
        </footer>
      </body>
    </div>
  );
};

export default Index;
