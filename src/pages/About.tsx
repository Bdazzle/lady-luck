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
                itemType="http://schema.org/AboutPage"
                className="px-8">
                <div id="headerContainer"
                    className="flex flex-col mt-24 items-center"
                >
                    <h1 className={`${goldText} text-center text-4xl mb-4 font-bold `}>About</h1>
                    <img src={logo} className="md:max-w-[466px]" />
                </div>
                <div id="text_container"
                    className="bg-darkPurple mx-4 rounded mt-4">
                    <p className="text-white text-2xl py-4 px-8 text-center"
                    itemProp="description"
                    >
                        Born and raised on Martha’s Vineyard, our owner Matti began playing poker for fun with his family when he was just 10 years old. While living in California during his 20s, Matti began dealing games at private casino parties and events out west.
                        <br></br>
                        And when a job feels like just having a good time, it’s hard to give up.
                        <br></br>
                        Upon returning to Martha’s Vineyard, Matti decided to “ let the good times roll”, and began Lady Luck - MV Casino Co. in 2023.
                        <br></br>
                        With a goal to add more flash, fun, and excitement to your party here on beautiful Martha’s Vineyard - Matti and his crew of fun-loving dealers at Lady Luck are ready to make your event unforgettable.
                    </p>
                </div>

                <div className={`${goldText} text-2xl text-center mt-4 font-bold`}>
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
