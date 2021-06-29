import "./about.css";
import logo from "../img/profile-pic.png";

export default function About() {
  return (
    <div className="about_wrapper">
      <div className="about">
        <div className="about_left">
          <h1 className="heading_1">Hi, I am Iana Alekseeva.</h1>
          <p className="paragraph_1">
            I am a Software Engineer with non-traditional background. I have a
            passion for building websites, espesially from the front end side. I
            am based in Silicon Valley.
          </p>
        </div>
        <div>
          <img src={logo} />
        </div>
      </div>
    </div>
  );
}
