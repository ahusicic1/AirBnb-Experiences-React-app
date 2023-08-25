import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./data.js"

export default function App() {

    var cards = data.map((cardData) => {
        return  <Card 
            img = {cardData.coverImg}
            rating = {cardData.stats.rating}
            reviewCount = {cardData.stats.reviewCount}
            location = {cardData.location}
            title = {cardData.title}
            price = {cardData.price}
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