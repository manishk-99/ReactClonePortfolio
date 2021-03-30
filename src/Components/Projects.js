import React from "react";
import { Link } from "react-router-dom";

const Projects = () => {
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
            <Link className="link link-active" to="/Projects">
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
            <img className="hero-img" src="/images/projectImage.svg" />
            <h1 className="hero-heading">
              See my <span className="heading-inverted">Code</span>
            </h1>
          </header>
          <ul className="list-non-bullet">
          <li>
                <article class="section ow showcase-list container container-center">
                 <h1><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Arrow_east.svg/1280px-Arrow_east.svg.png" alt="" class="arrow"/>  FireGitHubBase</h1>
                 <small>March, 2021</small>
                 <p>Here, I created a <strong>User Authentication login portal comprising of a sign-up, sign-in and a logout</strong> functionality page with <strong>firebase</strong> using react.js and once the user is logged in, there I designed a simple <strong>GitHub Requestor</strong> using GitHub API which shows the user data and his/her repositories.</p>
     
                 <a class="link link-primary" href="https://tmx1k.csb.app/Signin">Live Project</a>
                 <a class="link link-secondary" href="https://github.com/manishk-99/FireGitHubBase">View Source</a>
                </article>
             </li>
             <br/>
          <li>
                <article class="section showcase-list container container-center">
                 <h1><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Arrow_east.svg/1280px-Arrow_east.svg.png" alt="" class="arrow"/>  EcommerceWebsite-Demo </h1>
                 <small>March, 2021</small>
                 <p>This is a React <strong>EcommerceWebsite-Demo</strong> that I've created using some <strong>npm dependencies</strong> like <strong>Reactstrap, bootstrap, React-icons, React-toastify, faker for generating random data, and npm package axios for fetching API. Here, I created 2 url's. One is localurl i.e incase the PEXELS url doesnot work and the other one is PEXELS real API url. </strong> and some CSS. I implemented this on <strong>codesandbox.io</strong>.</p>
     
     
                 <a class="link link-primary" href="https://04t4d.csb.app/">Live Project</a>
                 <a class="link link-secondary" href="https://github.com/manishk-99/EcommerceWebsite-Demo">View Source</a>
                </article>
             </li>
             <br/>
          <li>
                <article class="section ow showcase-list container container-center">
                 <h1><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Arrow_east.svg/1280px-Arrow_east.svg.png" alt="" class="arrow"/>  RandomUserApp</h1>
                 <small>March, 2021</small>
                 <p>This is a React <strong>RandomUserApp</strong> that I've made using some <strong>npm dependencies</strong> like <strong>Reactstrap, bootstrap, React-icons, uuid, and npm package axios for fetching API</strong> and some CSS. I implemented this on <strong>codesandbox.io</strong>.</p>
     
                 <a class="link link-primary" href="https://zbzlm.csb.app/">Live Project</a>
                 <a class="link link-secondary" href="https://github.com/manishk-99/RandomUser">View Source</a>
                </article>
             </li>
             <br/>
          <li>
                <article class="section showcase-list container container-center">
                 <h1><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Arrow_east.svg/1280px-Arrow_east.svg.png" alt="" class="arrow"/>  localStorageTODO</h1>
                 <small>March, 2021</small>
                 <p>This is a React <strong>LocalStorage-TodoApp</strong> that I've made using some <strong>npm dependencies</strong> like <strong>Reactstrap, bootstrap, React-icons, uuid,</strong> and some CSS. I implemented this on <strong>codesandbox.io</strong>.</p>
     
     
                 <a class="link link-primary" href="https://xon5t.csb.app/">Live Project</a>
                 <a class="link link-secondary" href="https://github.com/manishk-99/useEffectTodo">View Source</a>
                </article>
             </li>
             <br/>
          <li>
                <article className="section ow showcase-list container container-center">
                 <h1>
                   <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Arrow_east.svg/1280px-Arrow_east.svg.png" alt="" className="arrow"/>  Mobile-TodoApp</h1>
                 <small>March, 2021</small>
                 <p>This is a React <strong>Mobile-TodoApp</strong> that I've made using some <strong>npm dependencies</strong> like <strong>Reactstrap, bootstrap, React-icons, uuid,</strong> and some CSS. I implemented this on <strong>VS code</strong> and then host the same on <strong>codesandbox.io</strong> so that all of you can have a look at this.</p>
     
                 <a class="link link-primary" href="https://gqsop.csb.app/">Live Project</a>
                 <a class="link link-secondary" href="https://github.com/manishk-99/ReducerTodo">View Source</a>
                </article>
             </li>
             <br/>
             <li>
              <article className="section showcase-list container container-center">
                <h1>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Arrow_east.svg/1280px-Arrow_east.svg.png"
                    alt=""
                    className="arrow"
                  />{" "}
                  ReactClonePortfolio
                </h1>
                <small>February, 2021</small>
                <p>
                  This is the <strong>React clone</strong> of my{" "}
                  <strong>Portfolio.</strong>
                </p>

                <a className="link link-primary" href="https://dz6om.csb.app/">
                  Live Project
                </a>
                <a
                  className="link link-secondary"
                  href="https://github.com/manishk-99/ReactClonePortfolio"
                >
                  View Source
                </a>
              </article>
            </li>
            <br />
            <li>
              <article className="section ow showcase-list container container-center">
                <h1>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Arrow_east.svg/1280px-Arrow_east.svg.png"
                    alt=""
                    className="arrow"
                  />{" "}
                  TikTakToe-React
                </h1>
                <small>February, 2021</small>
                <p>
                  This is a React <strong>TikTakToe</strong> game that I've made
                  using some <strong>npm dependencies</strong> like{" "}
                  <strong>Reactstrap, React-icons, React-toastify,</strong> and
                  some CSS. I implemented this on <strong>VS code</strong> and
                  then host the same on <strong>codesandbox.io</strong> so that
                  all of you can have a look at this.
                </p>

                <a className="link link-primary" href="https://n4vsd.csb.app/">
                  Live Project
                </a>
                <a
                  className="link link-secondary"
                  href="https://github.com/manishk-99/ticTacToe-React"
                >
                  View Source
                </a>
              </article>
            </li>
            <br />
            <li>
              <article className="section showcase-list container container-center">
                <h1>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Arrow_east.svg/1280px-Arrow_east.svg.png"
                    alt=""
                    className="arrow"
                  />{" "}
                  counterReactApp
                </h1>
                <small>February, 2021</small>
                <p>
                  I Created this <strong>React App</strong> by using{" "}
                  <strong>States/hooks</strong>. I implemented this on{" "}
                  <strong>VS code</strong> and then host the same on{" "}
                  <strong>codesandbox.io</strong> so that all of you can have a
                  look at this.
                </p>

                <a className="link link-primary" href="https://qqwne.csb.app/">
                  Live Project
                </a>
                <a
                  className="link link-secondary"
                  href="https://github.com/manishk-99/counterReactApp"
                >
                  View Source
                </a>
              </article>
            </li>
            <br />
            <li>
              <article className="section ow showcase-list container container-center">
                <h1>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Arrow_east.svg/1280px-Arrow_east.svg.png"
                    alt=""
                    className="arrow"
                  />{" "}
                  ReactTemplatePractise
                </h1>
                <small>February, 2021</small>
                <p>
                  I Created this <strong>React Template</strong> by modifying a{" "}
                  <strong>FREELANCER HTML, CSS, JS template</strong> available
                  on the <strong>Startbootstrap website.</strong> I implemented
                  this on <strong>VS code</strong> and then host the same on{" "}
                  <strong>codesandbox.io</strong> so that all of you can have a
                  look at this.
                </p>

                <a className="link link-primary" href="https://kqk1y.csb.app/">
                  Live Project
                </a>
                <a
                  className="link link-secondary"
                  href="https://github.com/manishk-99/ReactTemplateWork"
                >
                  View Source
                </a>
              </article>
            </li>
            <br />
            <li>
              <article className="section showcase-list container container-center">
                <h1>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Arrow_east.svg/1280px-Arrow_east.svg.png"
                    alt=""
                    className="arrow"
                  />{" "}
                  FoodApp!
                </h1>
                <small>January, 2021</small>
                <p>
                  This is a <strong>food</strong> recommendation app that i
                  created using reactjs on codesandbox.io
                </p>

                <a className="link link-primary" href="https://55kv8.csb.app/">
                  Live Project
                </a>
                <a
                  className="link link-secondary"
                  href="https://github.com/manishk-99/FoodApp"
                >
                  View Source
                </a>
              </article>
            </li>
            <br />
            <li>
              <article className="section ow showcase-list container container-center">
                <h1>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Arrow_east.svg/1280px-Arrow_east.svg.png"
                    alt=""
                    className="arrow"
                  />{" "}
                  Emoji's Interpreter!
                </h1>
                <small>January, 2021</small>
                <p>
                  This is a demo <strong>emoji</strong> interpreter app that i
                  created using reactjs on codesandbox.io
                </p>

                <a className="link link-primary" href="https://gy4oo.csb.app/">
                  Live Project
                </a>
                <a
                  className="link link-secondary"
                  href="https://github.com/manishk-99/EmojiInterpreter"
                >
                  View Source
                </a>
              </article>
            </li>
            <br />
            <li>
              <article className="section showcase-list container container-center">
                <h1>
                  {" "}
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Arrow_east.svg/1280px-Arrow_east.svg.png"
                    alt=""
                    className="arrow"
                  />{" "}
                  Groot Translator!
                </h1>
                <small>January, 2021</small>
                <p>
                  Are you a fan of <strong>Marvel?</strong> who don't!! So, This
                  is a <strong>GrootTranslator</strong> app that converts our
                  English sentence into Groot Language. I created this app using
                  vanilla js and some CSS. "GROOT - The Guardian Of The
                  Galaxy"."
                </p>

                <a
                  className="link link-primary"
                  href="https://manishsgroottranslator.netlify.app/"
                >
                  Live Project
                </a>
                <a
                  className="link link-secondary"
                  href="https://github.com/manishk-99/FunTranslation"
                >
                  View Source
                </a>
              </article>
            </li>
            <br />
            <li>
              <article className="section ow showcase-list container container-center">
                <h1>
                  {" "}
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Arrow_east.svg/1280px-Arrow_east.svg.png"
                    alt=""
                    className="arrow"
                  />{" "}
                  Minions Translator!
                </h1>
                <small>January, 2021</small>
                <p>
                  This is a Translator app that converts our{" "}
                  <strong>ENGLISH</strong> sentence into{" "}
                  <strong>MINIONS </strong>language. It is created by using some
                  vanilla JS with some CSS style sheets.{" "}
                </p>

                <a
                  className="link link-primary"
                  href="https://manishsminiongame.netlify.app/"
                >
                  Live Project
                </a>
                <a
                  className="link link-secondary"
                  href="https://github.com/manishk-99/neogcamp-banana-speak"
                >
                  View Source
                </a>
              </article>
            </li>
            <br />
            <li>
              <article className="section showcase-list container container-center">
                <h1>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Arrow_east.svg/1280px-Arrow_east.svg.png"
                    alt=""
                    className="arrow"
                  />{" "}
                  HarryPotter Fan?
                </h1>
                <small>January, 2021</small>
                <p>
                  Another CLI app built with <strong>nodeJS</strong>. This is an
                  easy level <strong>HarryPotter</strong> quiz of 10 questions.
                  You can send this to any of your friend who is a fan of
                  HarryPotter to check what score he gets? ;){" "}
                </p>

                <a
                  className="link link-primary"
                  href="https://repl.it/@manishhit2800/end-game-HARRYPOTTER?embed=1&output=1"
                >
                  Live Project
                </a>
                <a
                  className="link link-secondary"
                  href="https://github.com/manishk-99/HarryPotterGame-manish"
                >
                  View Source
                </a>
              </article>
            </li>
            <br />
            <li>
              <article className="section ow showcase-list container container-center">
                <h1>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Arrow_east.svg/1280px-Arrow_east.svg.png"
                    alt=""
                    className="arrow"
                  />{" "}
                  How well do you know me?
                </h1>
                <small>January, 2021</small>
                <p>
                  A CLI app built with <strong>nodeJS</strong>. You can send
                  this to your friends and find out who really knows you.
                </p>

                <a
                  className="link link-primary"
                  href="https://repl.it/@manishhit2800/Quizforfriends?embed=1&output=1"
                >
                  Live Project
                </a>
                <a
                  className="link link-secondary"
                  href="https://github.com/manishk-99/quizForFriends-manish"
                >
                  View Source
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
      </body>
    </div>
  );
};
export default Projects;
