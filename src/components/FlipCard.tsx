import React, { ReactNode, useEffect, useState } from "react"

interface CardProps {
    front: ReactNode,
    back: ReactNode,
    width: string,
    height: string,
    timing?: number
}

const FlipCard: React.FC<CardProps> = ({ front, back, width, height, timing }) => {
    const [time, setTime] = useState<number>(500)
    const [windowSize, setWindowSize] = useState<number>(window.innerWidth)

    useEffect(() =>{
        if(timing && window.innerWidth <= 768){
            setTime(timing)
        }
        const resize = () =>{
            setWindowSize(window.innerWidth)
        }
        window.addEventListener("resize", resize);
        return () =>{
            window.removeEventListener("resize",resize)
        }
    },[])

// console.log(windowSize)

    return (
        <div id="flipcontainer"
        className={`[perspective-1000]`}
        style={{
            width: width,
            height:height
        }}
        >
            {/* group-hover:[transform:rotateY(180deg)] [transform-style: preserve-3d] relative w-full h-full transition-tranform duration-500 */}
            {/* ${timing ? `duration-${timing}` : `lg:duration-500`} */}
            {/* transition-transform */}
            {/* duration-500 */}
            {/* */}
            <div className={`flipcard-inner w-full h-full relative transform-style-3d lg:transform lg:group-hover:rotate-y-180 lg:duration-500 `}
            style={  {
                animation : window.innerWidth < 768 ? `flip ${time}ms forwards ${time}ms` : 'none',
                // animationDuration:`${time}ms`,
                // animationFillMode: 'forwards',
                // animationDelay: `${time}ms`,
            }}
            >
            {/* flipcard-front absolute w-full h-full bg-black rotate-y-0 */}
                <div className={`flipcard-front absolute w-full h-full rotate-y-180 `}>
                    {front}
                </div>
                {/*  absolute w-full h-full backface-hidden [transform:rotateY(180deg)] bg-white */}
                <div className={`flipcard-back backface-hidden absolute rotate-y-0 `}>
                    {back}
                </div>
                
            </div>
        </div>
    )
}

export default FlipCard