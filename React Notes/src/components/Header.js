import React from "react"
import reactLogo from "../images/react-icon-small.png";
// must import images and reference it by {variable name}.

export default function Header() {
  return (
    <header>
      <nav className="nav">
        <img src={reactLogo} className="nav--icon" alt="React Icon" />
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}