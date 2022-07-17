import React from "react"

// need to export the file to allow import 
export default function Nav() {
    return (
        <header>
            <nav className="nav">
                <img src="./images/react-logo.png" className="nav-logo" />
                <h3 className="logo-text">ReactFacts</h3>
                <ul className="nav-items">
                  <li>React Course - Project 1</li>
                </ul>
            </nav>
        </header>
    )
}

