import React from "react"
import Navbar from "../components/Navbar"
import cardFaces from "../SVGs/cardFaces"

const Merch: React.FC = ({ }) => {

    return (
        <div id="merch_content" className="h-[80vh]">
            <Navbar />
            <div id="hand" className="md:mt-24 flex justify-center items-end w-full h-full mb-12">
                <div id="hand_wrapper" className="flex justify-around items-center mb-[50%] lg:mb-[10%]">
                    <div id="card1" className={`max-w-[80px] max-h-[112px] md:max-w-[142px] md:max-h-[200px] origin-center absolute animate-deal1`}>
                        {cardFaces('soon').cardback}
                    </div>
                    <div id="card2" className={`max-w-[80px] max-h-[112px] md:max-w-[142px] md:max-h-[200px] origin-center absolute animate-deal2`}>
                        {cardFaces('soon').cardback}
                    </div>
                    <div id="card3" className={` max-w-[80px] max-h-[112px] md:max-w-[142px] md:max-h-[200px] origin-center absolute animate-dealMid`}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="card" width="100%" height="100%" preserveAspectRatio="none" viewBox="-120 -168 240 336" >
                            <defs>
                                <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stop-color="#BF953F" />
                                    <stop offset="1%" stop-color="#FCF6BA" />
                                    <stop offset="2%" stop-color="#B38728" />
                                    <stop offset="3%" stop-color="#FBF5B7" />
                                    <stop offset="4%" stop-color="#AA771C" />
                                </linearGradient>
                            </defs>
                            <rect width="239" height="335" x="-119.5" y="-167.5" rx="12" ry="12" fill="white" stroke="black" />
                            <text y={'-10%'} width={'50%'} textAnchor="middle">
                                <tspan className={`text-[60px] font-bold font-cursive`} fill="url(#goldGradient)">Coming</tspan>
                                <tspan className="text-[60px] font-bold font-cursive" fill="url(#goldGradient)" dy={'20%'} dx={'-70%'}>Soon</tspan>
                            </text>
                        </svg>
                    </div>
                    <div id="card4" className={`max-w-[80px] max-h-[112px] md:max-w-[142px] md:max-h-[200px] origin-center absolute animate-deal4`}>
                        {cardFaces('soon').cardback}
                    </div>
                    <div id="card5" className={`max-w-[80px] max-h-[112px] md:max-w-[142px] md:max-h-[200px] origin-center absolute animate-deal5`}>
                        {cardFaces('soon').cardback}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Merch