import { useEffect, useState } from "react"

interface Burger {
    barstyle: string,
    containerstyle: string,
    onClick: () => void,
    defaultClickState: boolean,
}


export default function TWBurgerButton({ barstyle, containerstyle, onClick, defaultClickState }: Burger) {
    const [isClicked, setIsClicked] = useState<boolean>()

    const handleClick = (): void => {
        onClick()
    }

    useEffect(() => {
        setIsClicked(defaultClickState)
    })

    return (
        <div id="burger" 
        role="button"
        aria-label="Open nav menu"
        className={containerstyle} onClick={() => handleClick()}>
            <div id="bar1"
                className={isClicked ?
                    `${barstyle} rotate-45 translate-y-2 translate-x-1 transition-all duration-300 ease-in-out`
                    :
                    `${barstyle}`
                }
            
            ></div>
            <div id="bar2" 
            className={isClicked ?
                `${barstyle} opacity-0 transition-opacity duration-300 `
                :
                `${barstyle}`
            }
            
            ></div>
            <div id="bar3" 
            className={isClicked ?
                `${barstyle} -rotate-45 -translate-y-2 translate-x-1 transition-all duration-300 ease-in-out `
                :
                `${barstyle}`
            }
            
            ></div>
        </div>
    )
}