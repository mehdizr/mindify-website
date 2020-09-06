import React, { Component } from "react";
import "../sass/App.scss";
import "../sass/Landing.scss";
import "../sass/mobile.scss";
import {
  FaGooglePlay,
  FaApple,
  FaGoogle,
  FaTwitter,
  FaGooglePlusG,
  FaFacebookSquare,
  FaInstagram,
  FaRedditAlien,
} from "react-icons/fa";
import {
  RiDownloadLine
} from "react-icons/ri";

import person_1 from "../images/person_1.jpg";
import person_2 from "../images/person_2.jpg";
import icon_1 from "../icons/1.png";
import phone_3 from "../images/phone_3.png";
import icon_2 from "../icons/2.png";
import icon_3 from "../icons/3.png";
import icon_4 from "../icons/4.png";
import icon_5 from "../icons/5.png";
import icon_6 from "../icons/6.png";
import phone from "../images/phone_2.png";
import doc from "../images/doc.png";
import tools from "../images/tools.png";
import mobile_app from "../images/mobile-app.png";

class Landing extends Component {
  render() {
    return (
      <div>
        <nav role="navigation">
          <div id="menuToggle">
            <input type="checkbox" />

            <span></span>
            <span></span>
            <span></span>

            <ul id="menu">
              {/*<li>
                <a href="#"></a>
              </li>
               <li class="">
                <div tabindex="0" class="onclick-menu">
                How It Work
                  <ul class="onclick-menu-content">
                    <li>
                      <a href="#">Sub-1</a>
                    </li>
                    <li>
                      <a href="#">Sub-2</a>
                    </li>
                    <li>
                      <a href="#">Sub-3</a>
                    </li>
                  </ul>
                </div>
              </li> */}
              <li className="logo">
                <a href="">
                  <img src="" alt="" />
                </a>
              </li>
              <br />
              <li>
                <a href="#">Features</a>
              </li>
              <li>
                <a href="#">How It Work</a>
              </li>
              
              <li>
                <a href="#">Contact US</a>
              </li><li> <br />
              <br />
                <a href="#" className="btn-download"><RiDownloadLine/> &nbsp;Download</a>
              </li>
              <br />
              <br />
              <br />
              <br />
              <li className="socials">
                <a href="instagram.com">
                  <FaInstagram />
                </a>
                <a href="twitter.com">
                  <FaTwitter />
                </a>
                <a href="reddit.com">
                  <FaRedditAlien />
                </a>
                <a href="facebook.com">
                  <FaFacebookSquare />
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <div id="nav-main">
          <div className="container">
            <ul>
              <li className="logo">
                <a href="">
                  <img src="" alt="" />
                </a>
              </li>
            </ul>

            <ul>
              <li>
                <a href="">Features</a>|
              </li>
              <li>
                <a href="">How It Work</a>|
              </li>
              <li>
                <a href="">Contact US</a>
              </li>
            </ul>

            <a className="btn-download" href="">
              Downlaod
            </a>
          </div>
        </div>
        <div id="background">
          <div id="show-case">
            <div className="container">
              <div className="caption-1">
                <h1>
                  Organize your
                  <br /> Life Projecs
                </h1>
                <p>
                  Mindify helps you capture and prioritize ideas,
                  <br /> projects, and to-do list, so nothing falls through the
                  cracks
                </p>
                <a href="">
                  <button>Get Started - It's free</button>
                </a>
              </div>
              <div className="app-bg">
                <img src={mobile_app} alt="" />
              </div>
            </div>
            <div className="scroll">
              <div class="mouse-scroll">
                <span class="mouse">
                  <span class="mouse-movement"></span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div id=" scroll_down"></div>
        <div id="section-1">
          <div className="container">
            <div className="titlle">
              <h1>Foucus on what matters most</h1>
              <p className="paragraph">Some of Mindify's key features</p>
            </div>

            <ul>
              <li>
                <img src={icon_1} />
                <h3>Never miss a bit</h3>
                <p>Keep deadlines reminders</p>
              </li>
              <li>
                <img src={icon_2} />
                <h3>Plan and manage your day</h3>
                <p>Start your morning with a clean slate</p>
              </li>
              <li>
                <img src={icon_3} />
                <h3>With you, everywhere</h3>
                <p>Accessible across all of your devices</p>
              </li>
            </ul>
            <ul>
              <li>
                <img src={icon_4} />
                <h3>Keep organized</h3>
                <p>Categorize your mind into categories</p>
              </li>
              <li>
                <img src={icon_5} />
                <h3>Never forget a thing</h3>
                <p>Quickly add your tasks, notes, expenses</p>
              </li>
              <li>
                <img src={icon_6} />
                <h3>Find everything, fast!</h3>
                <p>Quickly search through your items with</p>
              </li>
            </ul>
          </div>
        </div>
        <div id="background_2">
          <div className="section_2">
            <div className="container">
              <div className="caption-2">
                <h1>
                  Unload your mental
                  <br /> RAM
                </h1>
                <p className="paragraph_2">
                  When you don't occupy your mind
                  <br /> with having to remember every divttle thing.
                  <br /> you become less stresses and it becomes easier
                  <br /> to think clearly.
                </p>
              </div>
              <div className="app-bg2">
                <img class="img-phone" src={phone} />
                <img class="img-doc" src={doc} />
                <img class="img-tools" src={tools} />
              </div>
            </div>
          </div>
        </div>
        <div id="background_3">
          <div className="section_3">
            <div className="container container-1">
              <form action="" className="form">
                <div className="contact">
                  <label htmlFor="Email">Email</label>
                  <br />
                  <input
                    type="email"
                    id="Email"
                    placeholder="Enter your email address"
                  />
                  <br />

                  <label htmlFor="Email">Password</label>
                  <br />
                  <input
                    type="password"
                    placeholder="Enter your email address"
                  />
                  <br />
                  <button>Sign up for free</button>
                </div>
              </form>
              <div className="signup-titlle">
                <h1>
                  Sign up for <br />
                  Mindify Today
                </h1>
                <p>
                  Capture ideas and inspiration form <br />
                  anywhere and manage tasks with ease.
                </p>
                <button>
                  <FaGoogle className="google-icon" /> Signup free with google
                </button>
              </div>
            </div>
          </div>
        </div>
        <div id="background-4">
          <div className="section_4">
            <div className="container container-1">
              <div className="customers-titlle">
                <p>Our customers</p>
                <h1>
                  Range from Fortune <br />
                  500 companies
                </h1>
              </div>
              <div className="comments">
                <div className="first-comments">
                  <img src={person_1} alt="" />
                  <p>
                    &nbsp;&nbsp;&nbsp;- The app realy help me organize my <br />
                    planes and big projects.
                    <br />I am sticifed with mindify app.
                    <br />
                    <br />
                    <span>
                      
                      <span>،،</span> Jason Nash
                    </span>
                  </p>
                </div>
                <div className="second-comments">
                  <img src={person_2} alt="" />
                  <p>
                    &nbsp;&nbsp;&nbsp;- I am see the expence list so i can have
                    <br />
                    financial managment.
                    <br />
                    it really help me manage my time.
                    <br />
                    <br />
                    <span>
                      
                      <span>،،</span> Marcus Johns
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="background-5">
          <div className="section_5">
            <div className="container container-2">
              <div>
                <img className="img-phone2" src={phone_3} />
              </div>
              <div className="right-tittle">
                <h1>
                  Feel organaized with
                  <br /> clearerthinking
                </h1>
                <p>
                  Often we get caught up in our evryday business and <br />
                  lose track of wath is most important.
                </p>
                <div className="buttons">
                  <button className="google-dl">
                    Get it on
                    <br />
                    <span>
                      <FaGooglePlay className="playstore-icon" /> &nbsp; Google
                      Play
                    </span>
                  </button>
                  <button className="apple-dl">
                    <FaApple className="apple-icon" />
                    &nbsp; Coming soon...
                    <br />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="background_6">
          <div className="section_6">
            <div className="container container-1">
              <div>
                <h1>
                  <h1>Contact Us</h1>
                  <br />

                  <p className="paragraph_3">
                    Our experts is available of response <br />
                    all of the day and right,,
                    <br />
                    apply your comment, criticise
                    <br />
                    and suggestion
                    <br />
                    <br />
                    <br />
                    <br />
                    <p>Email for more information:</p>
                    <a href="info@mindify.com">info@Mindify.com</a>
                  </p>
                </h1>
              </div>
              <form action="" className="form-2">
                <div className="contact">
                  <label htmlFor="Email">Email</label>
                  <br />
                  <input
                    type="email"
                    id="Email"
                    placeholder="Enter your email address"
                  />
                  <br />

                  <label htmlFor="Email">Password</label>
                  <br />
                  <input
                    type="password"
                    placeholder="Enter your email address"
                  />
                  <br />
                  <label
                    htmlFor="Email"
                    placeholder="Write your message"
                    maxlength="2"
                  >
                    Write Message
                  </label>
                  <br />
                  <textarea />
                  <br />
                  <button>Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <footer id="footer">
          <div className="container">
            <ul>
              <li>
                <a href="">
                  <FaInstagram className="instagram" />
                </a>
              </li>
              <li>
                <a href="">
                  <FaFacebookSquare className="facebook" />
                </a>
              </li>
              <li>
                <a href="">
                  <FaRedditAlien className="google_p" />
                </a>
              </li>
              <li>
                <a href="">
                  <FaTwitter className="twitter" />
                </a>
              </li>
            </ul>
            <div className="copyright">
              <p>"All rights reserved 2020 " &copy;</p>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
export default Landing;
