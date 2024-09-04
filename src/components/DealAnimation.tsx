import cardFaces from "../SVGs/cardFaces"

const Hand: React.FC = () => {

    return (
        <div id="hand" className="mt-[20%] flex justify-center items-center w-full h-full mb-12">
            <div id="hand_wrapper" className="flex justify-around items-center lg:mb-[10%]">
                <div id="card1" className={`max-w-[80px] max-h-[112px] md:max-w-[142px] md:max-h-[200px] origin-center absolute animate-deal1 `}>
                    {cardFaces('soon').cardback}
                </div>
                <div id="card2" className={`max-w-[80px] max-h-[112px] md:max-w-[142px] md:max-h-[200px] origin-center absolute animate-deal2 `}>
                    {cardFaces('soon').cardback}
                </div>
                <div id="card3" className={` max-w-[80px] max-h-[112px] md:max-w-[142px] md:max-h-[200px] origin-center absolute animate-deal3 `}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="card" width="100%" height="100%" preserveAspectRatio="none" viewBox="-120 -168 240 336" >
                        {/* <defs> */}
                        {/* <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="0%" gradientTransform="rotate(90)">
                                    <stop offset="0%" stop-color="#BF953F" />
                                    <stop offset="1%" stop-color="#FCF6BA" />
                                    <stop offset="2%" stop-color="#B38728" />
                                    <stop offset="3%" stop-color="#FBF5B7" />
                                    <stop offset="4%" stop-color="#AA771C" />
                                </linearGradient> */}
                        {/* </defs> */}
                        {/* <text y={'-10%'} width={'50%'} textAnchor="middle">
                            <tspan className={`text-[60px] font-bold font-crimson-text`} fill="url(#goldGradient)">Coming</tspan>
                            <tspan className="text-[60px] font-bold font-crimson-text" fill="url(#goldGradient)" dy={'20%'} dx={'-70%'}>Soon</tspan>
                        </text> */}
                        <rect width="239" height="335" x="-119.5" y="-167.5" rx="12" ry="12" fill="white" stroke="black" />
                        <svg viewBox="0 -20 215 260" x={'-47%'} y={'-20%'} >
                            <defs>
                                <linearGradient id="goldGradient1" x1="0%" y1="30%" x2="100%" y2="50%" gradientTransform="rotate(70)">
                                    <stop offset="0" stop-color="#efe4a2" />
                                    <stop offset="0.22" stop-color="#d7bf74" />
                                    <stop offset="0.402" stop-color="#c09b48" />
                                    <stop offset="0.5" stop-color="#aa771c" />
                                    <stop offset="0.57" stop-color="#c09b48" />
                                    <stop offset="0.78" stop-color="#d7bf74" />
                                    <stop offset="1" stop-color="#efe4a2" />
                                </linearGradient>
                            </defs>
                            <text>
                                <tspan className={`text-[60px] font-bold font-crimson-text`} fill="url(#goldGradient1)">Coming</tspan>
                            </text>
                        </svg>
                        <svg viewBox="0 0 75 260" x={'-30%'} y={'-10%'}>
                            <defs>
                                <linearGradient id="goldGradient2" x1="0%" y1="30%" x2="100%" y2="50%" gradientTransform="rotate(70)">
                                    <stop offset="0" stop-color="#efe4a2" />
                                    <stop offset="0.22" stop-color="#d7bf74" />
                                    <stop offset="0.402" stop-color="#c09b48" />
                                    <stop offset="0.5" stop-color="#aa771c" />
                                    <stop offset="0.57" stop-color="#c09b48" />
                                    <stop offset="0.78" stop-color="#d7bf74" />
                                    <stop offset="1" stop-color="#efe4a2" />
                                </linearGradient>
                            </defs>
                            <text>
                                <tspan className="text-[60px] font-bold font-crimson-text" fill="url(#goldGradient2)" dy={'25%'} dx={'-75%'}>Soon</tspan>
                            </text>
                        </svg>
                    </svg>
                </div>
                <div id="card4" className={`max-w-[80px] max-h-[112px] md:max-w-[142px] md:max-h-[200px] origin-center absolute animate-deal4 `}>
                    {cardFaces('soon').cardback}
                </div>
                <div id="card5" className={`max-w-[80px] max-h-[112px] md:max-w-[142px] md:max-h-[200px] origin-center absolute animate-deal5 `}>
                    {cardFaces('soon').cardback}
                </div>
            </div>
        </div>
    )
}

export default Hand