import "./navigation.css";
import { HashLink as Link } from "react-router-hash-link";

export default function Navigation() {
  return (
    <div className="navigation">
      <div className="logo">iana alekseeva.</div>
      <ul className="navigation__nav-bar">
        <li>
          <Link to="#about">About</Link>
        </li>
        <li>
          <Link to="#projects">Projects</Link>
        </li>
        <li>
          <Link to="#contacts">Contacts</Link>
        </li>
      </ul>
    </div>
  );
}
