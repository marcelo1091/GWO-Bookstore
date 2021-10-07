import React from "react"
import Books from "../Books/Books"
import './home.css'

function Home() {

    return (
        <div className="container home">
            <h3>Nasze Produkty</h3>
            <Books />
        </div>
    )
}

export default Home