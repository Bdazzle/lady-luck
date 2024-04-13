import React from "react"
import Navbar from "../components/Navbar"
import logo from "../assets/logo-inverted-mid.png"
import { goldText } from "../constants"
import Sun from "../SVGs/Sun"

const About: React.FC = ({ }) => {

    return (
        <div>
            <Navbar />
            <div itemScope
                itemType="http://schema.org/AboutPage">
                <div id="headerContainer"
                    className="flex flex-col lg:mt-24 items-center"
                >
                    <h1 className={`${goldText} text-center text-4xl`}>About</h1>
                    <img src={logo} className="max-w-[466px]" />
                </div>
                <div id="text_container"
                    className="bg-darkPurple mx-4 rounded">
                    <p className="text-white text-2xl p-4"
                    itemProp="description"
                    >
                        Born and raised on Martha’s Vineyard, Matti began playing poker for fun with his family when he was just 10 years old. While living in California during his 20s, Matti began dealing games at private casino parties and events out west.
                        <br></br>
                        Do you want a good job feels like just having a good time, it’s hard to give up.
                        <br></br>
                        Upon returning to Martha’s Vineyard, Matti decided to “ let the good times roll”, and began Lady luck - MV casino co in 2023.
                        <br></br>
                        With a goal to add more fun, flash, and excitement to party is here on beautiful Martha’s Vineyard - Matti and his crew of fun-loving dealers at Lady Luck, are ready to make your event unforgettable.
                    </p>
                </div>

                <div className={`${goldText} text-2xl text-center mt-4`}>
                    May Lady Luck smile on all of us!
                    {/* ☀️ */}
                </div>
                <div id="sun_container" className="flex justify-center h-[250px] min-w-52">
                    <Sun />
                </div>
            </div >
        </div>
    )
}

export default About
