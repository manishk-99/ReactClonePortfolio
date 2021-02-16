import React from "react";
import { Link } from "react-router-dom";

const Blogs = () => {
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
            <Link className="link link" to="/">
              Home
            </Link>
          </li>
          <li className="list-item-inline">
            <Link className="link " to="/Projects">
              Projects
            </Link>
          </li>
          <li className="list-item-inline">
            <Link className="link link-active" to="/blogs">
              Blogs
            </Link>
          </li>
          <li className="list-item-inline">
            <Link className="link " to="/About">
              About me
            </Link>
          </li>
        </ul>
      </nav>
      <div className="clr-section">
        <header className="hero">
          <h1 className="hero-heading">
            My <span className="heading-inverted">Blogs</span>
          </h1>
          <img className="hero-img" src="/images/BlogsImage.svg" />
        </header>
        <ul className="list-non-bullet">
          <li>
            <article className="ow showcase-list container container-center">
              <h1>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Arrow_east.svg/1280px-Arrow_east.svg.png"
                  alt=""
                  className="arrow"
                />{" "}
                3-Month's with iPhone 11!
              </h1>
              <small>January, 2021</small>
              <p>
                I've been using the iPhone 11 for 3 months, and it's my favorite
                Smart Phone I've ever owned. I bought Apple's new iPhone 11 in
                September, and have been impressed with it so far. In fact, it's
                my favorite of the three Phones I've owned, mainly for the Black
                color, camera, and large screen. Still, I've had issues with the
                screen scratching easily and the battery life being just so-so.
              </p>
              <a
                className="link link-primary"
                href="https://manishkumarsblog.hashnode.dev/3-months-with-iphone11"
              >
                Read More
              </a>
            </article>
          </li>
          <br />
        </ul>
      </div>
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
    </div>
  );
};
export default Blogs;
