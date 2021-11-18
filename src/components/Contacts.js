import "./contacts.css";
import LinkedInIcon from "./LinkedInIcon";
import GithubIcon from "./GithubIcon";
import InstagramIcon from "./InstagramIcon";

export default function Contacts() {
  return (
    <section className="contacts" id="contacts">
      <h2 className="heading_2">Feel free to send me a message!</h2>
      <p className="paragraph_2">alekseevadev@gmail.com</p>

      <div className="contacts_sosial-icons">
        <a
          target="_blank"
          href="https://www.linkedin.com/in/iana-alekseeva-834246182/"
        >
          <LinkedInIcon width="50" height="50" className="icon" />
        </a>
        <a target="_blank" href="https://github.com/alekseevaiana">
          <GithubIcon width="50" height="50" className="icon" />
        </a>
        <a target="_blank" href="https://instagram.com/junior_way_sv?r=nametag">
          <InstagramIcon width="50" height="50" className="icon" />
        </a>
      </div>
      <p className="paragraph_3">Silicon Valley, California</p>
    </section>
  );
}
