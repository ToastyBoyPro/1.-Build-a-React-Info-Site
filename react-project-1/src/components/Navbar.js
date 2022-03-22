import React from "react"
import reactLogo from "../images/react-icon-small.png";
// must import images and reference it by {variable name}.

export default function Navbar() {
    return (
        <nav>
            <img src={reactLogo} className="nav--icon" alt="React Icon"/>
            <h3 className="nav--logo_text">ReactFacts</h3>
            <h4 className="nav--title">React Course - Project 1</h4>
        </nav>
    )
}