import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./data.js"

export default function App() {

    var cards = data.map((cardData) => {
        return  <Card 
            key = {cardData.id}
            item = {cardData}
        />
    })

    return (
        <div>
            <Navbar />
            <Hero />
            <section className="cards--list">
                {cards}
            </section>
        
        </div>
    )
}