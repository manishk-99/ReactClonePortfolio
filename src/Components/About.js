import React from "react";
import { Link } from "react-router-dom";

const About = () => {
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
            <Link className="link" to="/blogs">
              Blogs
            </Link>
          </li>
          <li className="list-item-inline">
            <Link className="link link-active" to="/About">
              About me
            </Link>
          </li>
        </ul>
      </nav>
      <div className="clr-section">
        <header className="hero">
          <h1 className="hero-heading">
            <span className="heading-inverted">About</span>
          </h1>
          <img className="hero-myimg" src="/images/MyImage.jpeg" />
        </header>

        <div className=" section AboutIntro">
          <br />
          <h1 className="AboutHead">
            Manish <span style={{ color: "#10b95c" }}>Kumar</span>
          </h1>
          <div className="section">
            <br />
            <p>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Arrow_east.svg/1280px-Arrow_east.svg.png"
                alt=""
                className="arrow"
              />{" "}
              I am a third year INFORMATION TECHNOLOGY UNDERGRADUATE student
              from National Institute of Technology,Srinagar. I am working on
              Web Development and Competitive coding both. Besides that i have
              an excellent communication skills too.{" "}
            </p>
            <p>
              Apart from that I have keen interest in Web, Web Apps. These days
              I am in ❤️ with JavaScript and its Frameworks.
            </p>
            <br />
          </div>
          <br />
          <p>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Arrow_east.svg/1280px-Arrow_east.svg.png"
              alt=""
              className="arrow"
            />{" "}
            You can contact me for projects on Linkedin.
          </p>
          <a
            className="link link-primary"
            href="https://www.linkedin.com/in/manish-kumar18"
          >
            Linkedin{" "}
          </a>
          <br />
        </div>
        <br />
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
export default About;
