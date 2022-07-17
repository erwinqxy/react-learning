import React from "react"

export default function MainContent() {
    return (
        <main className="container">
            <h1 className="main-title">Fun facts about React</h1>
            <ul className="facts">
                <li>Was first released in 2013.</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on GitHub</li>
                <li>Is mainted by Facebook</li>
                <li>Powers thousands of enterprsie apps, including mobile apps</li>
            </ul>

            <h1>Reasons I'm excited to learn React</h1>
            <ul className="facts">
                <li>It's a popular library.</li>
                <li>I would like to brush up on my frontend skills!!</li>
                <li>I think react is pretty cool!</li>
            </ul>
        </main>
    )
}