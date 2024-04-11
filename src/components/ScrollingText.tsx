import React, { CSSProperties } from "react";

interface ScrollingTextProps {
    words: string[],
    speed: number,
    fontStyle: CSSProperties
    containerSize? : string
}

const ScrollingText: React.FC<ScrollingTextProps> = ({ words, speed, fontStyle , containerSize = '24px' }) => {

    return (
        <div className={`overflow-hidden`}
        style={{
            height: containerSize
        }}
        >
                <ul className={`animate-scrollX`}
                style={fontStyle}
                >
                    {
                        words.map((word: string) => {
                            return <li key={word}>
                                {word}
                            </li>
                        })
                    }
                </ul>
        </div>
    )
}

export default ScrollingText