import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillBehanceSquare,
  AiOutlineBehance,
  AiOutlineBehanceSquare,
  AiFillBehanceCircle,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
      <Row>
  <Col md={8} className="home-about-description">
    <h1 style={{ fontSize: "2.6em" }}>
      LET ME <span className="purple"> INTRODUCE </span> MYSELF
    </h1>
    <p className="home-about-body">
      Design has always been my passion,<i>
        <b className="purple"> specially UX/UI Designer</b>
      </i>, and over time, I have refined my skills to craft experiences that truly make an impact.
      <br />
      <br />I am proficient in essential tools like
      <i>
        <b className="purple"> Figma and Adobe Tools</b>
      </i>
      , and I have a strong foundation in
      <b className="purple"> User-Centered Design</b>.
      <br />
      <br />
      My areas of interest include designing and developing
      <i>
        <b className="purple"> intuitive interfaces</b>
      </i>
      &nbsp;and exploring  
      <b className="purple"> responsive design</b> for mobile and web platforms.
      <br />
      <br />
      Whenever possible, I apply my passion for
      <i>
        <b className="purple"> UI and User Experience </b>
      </i>
      and enhance projects with <b className="purple"> Design System </b> and 
      <b className="purple"> accessibility and inclusivity practices</b>,
      ensuring every detail is crafted with the user in mind.
      <br />
      <br />
      I am always exploring new ways to integrate
      <i>
        <b className="purple"> Design </b>
      </i>
      to create engaging and functional user experiences.
    </p>
  </Col>
  <Col md={4} className="myAvtar">
    <Tilt>
      <img src={myImg} className="img-fluid" alt="avatar" />
    </Tilt>
  </Col>
</Row>

        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
            <li className="social-icons">
                <a
                  href="https://www.behance.net/maiarasilveira"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineBehance />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/maiarascosta11/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://github.com/maiarawin"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              
              
             
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
