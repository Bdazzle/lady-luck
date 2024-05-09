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

    useEffect(() =>{
        if(timing && window.innerWidth <= 768){
            setTime(timing)
        }
    },[])

    return (
        <div id="flipcontainer"
        className={`[perspective-1000]`}
        style={{
            width: width,
            height:height
        }}
        >
            <div className={`flipcard-inner w-full h-full relative transform-style-3d lg:transform lg:group-hover:rotate-y-180 lg:duration-500 `}
            style={  {
                // animation : window.innerWidth <= 768 ? `flip ${time}ms forwards ${time}ms` : 'none',
                animation : window.innerWidth <= 768 ? `flip ${time}ms forwards ${time}ms` : 'none',
            }}
            >
                <div className={`flipcard-front absolute w-full h-full rotate-y-180`}>
                    {front}
                </div>
                <div className={`flipcard-back backface-hidden absolute rotate-y-0 `}>
                    {back}
                </div>
                
            </div>
        </div>
    )
}

export default FlipCard