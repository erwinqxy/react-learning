import React from "react"
import ReactDOM from "react-dom"
import Nav from "./components/Nav"        // dont have to specify .js cause default
import Footer from "./components/Footer"
import MainContent from "./components/MainContent"


function App() {
    return (
        <div>
            <Nav />
            <MainContent />
            <Footer />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))