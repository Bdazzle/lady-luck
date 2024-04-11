import React, { useEffect, useRef, useState } from "react"
import { goldStyle, goldText } from "../constants"
import logo from "../assets/logo-inverted-mid.png"
import { FacebookIcon, FacebookShareButton, TwitterShareButton, XIcon } from "react-share"
import TWBurgerButton from "./TWBurgerButton"
import NavLinks from "./NavLinks"

interface NavProps {
    translateY?: number
}

const Navbar: React.FC<NavProps> = ({}) => {
    // const currentRoute = useLocation()
    const logoRef = useRef<HTMLHeadingElement>(null)
    // const [windowSize, breakpoint] = useWindowSize()
    const [isClicked, setIsClicked] = useState<boolean>(false)
    const [windowSize, setWindowSize] = useState<number>(window.innerWidth)

    useEffect(() => {
        const resize = () => {
            setWindowSize(window.innerWidth)
            if (window.innerWidth > 768) {
                setIsClicked(false)
            }
        }
        window.addEventListener("resize", resize);
        return () => {
            window.removeEventListener("resize", resize)
        }
    }, [])

    return (
        <div itemScope itemType="http://schema.org/LocalBusiness"
        >
            <nav id="nav" role="navigation" aria-label="Primary"
                className="fixed md:h-24 w-full flex flex-col lg:justify-center lg:items-center lg:flex-row mt-0 bg-black overflow-hidden z-10"
            >
                <div id="logocontainer"
                    // ${breakpoint === 'sm' || breakpoint === 'md' ? 'w-[50%]' : window.scrollY === 0 ? 'w-0' : 'w-[50%]'}
                    // h-12
                    className={`flex flex-row  lg:h-20 w-full justify-evenly`}
                >
                    <img src={logo}
                        className="h-12"
                        itemProp="logo"
                    />
                    <h1 ref={logoRef} itemProp="name"
                        id="navlogo"
                        // style={
                        //     windowSize >= 640 ?
                        //         {
                        //             transform: `translateY(${0 - translateY}px)`,
                        //         }
                        //         :
                        //         {}
                        // }
                        className={`${goldText} font-cursive text-4xl text-center lg:text-6xl w-[50%]`} >
                        Lady Luck
                    </h1>
                    <div id="socials"
                        className="h-12 flex flex-row align-top"
                    >
                        <FacebookShareButton children={<FacebookIcon size={40} />} url={""} />
                        <TwitterShareButton url="" children={<XIcon size={40} />} />
                        <a id='ig' href="" target="_blank"
                            className="w-[40px] h-[40px]"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" height="40" width="40" viewBox="-19.5036 -32.49725 169.0312 194.9835">
                                <defs>
                                    <radialGradient fy="578.088" fx="158.429" gradientTransform="matrix(0 -1.98198 1.8439 0 -1031.399 454.004)" gradientUnits="userSpaceOnUse" xlinkHref="#ig_a" r="65" cy="578.088" cx="158.429" id="ig_c" />
                                    <radialGradient fy="473.455" fx="147.694" gradientTransform="matrix(.17394 .86872 -3.5818 .71718 1648.351 -458.493)" gradientUnits="userSpaceOnUse" xlinkHref="#ig_b" r="65" cy="473.455" cx="147.694" id="ig_d" />
                                    <linearGradient id="ig_b">
                                        <stop stopColor="#3771c8" offset="0" />
                                        <stop offset=".128" stopColor="#3771c8" />
                                        <stop stopOpacity="0" stopColor="#60f" offset="1" />
                                    </linearGradient>
                                    <linearGradient id="ig_a">
                                        <stop stopColor="#fd5" offset="0" />
                                        <stop stopColor="#fd5" offset=".1" />
                                        <stop stopColor="#ff543e" offset=".5" />
                                        <stop stopColor="#c837ab" offset="1" />
                                    </linearGradient>
                                </defs>
                                <path d="M65.033 0C37.891 0 29.953.028 28.41.156c-5.57.463-9.036 1.34-12.812 3.22-2.91 1.445-5.205 3.12-7.47 5.468-4.125 4.282-6.625 9.55-7.53 15.812-.44 3.04-.568 3.66-.594 19.188-.01 5.176 0 11.988 0 21.125 0 27.12.03 35.05.16 36.59.45 5.42 1.3 8.83 3.1 12.56 3.44 7.14 10.01 12.5 17.75 14.5 2.68.69 5.64 1.07 9.44 1.25 1.61.07 18.02.12 34.44.12 16.42 0 32.84-.02 34.41-.1 4.4-.207 6.955-.55 9.78-1.28a27.22 27.22 0 0017.75-14.53c1.765-3.64 2.66-7.18 3.065-12.317.088-1.12.125-18.977.125-36.81 0-17.836-.04-35.66-.128-36.78-.41-5.22-1.305-8.73-3.127-12.44-1.495-3.037-3.155-5.305-5.565-7.624-4.3-4.108-9.56-6.608-15.829-7.512C102.338.157 101.733.027 86.193 0z"
                                    fill="url(#ig_c)" />
                                <path d="M65.033 0C37.891 0 29.953.028 28.41.156c-5.57.463-9.036 1.34-12.812 3.22-2.91 1.445-5.205 3.12-7.47 5.468-4.125 4.282-6.625 9.55-7.53 15.812-.44 3.04-.568 3.66-.594 19.188-.01 5.176 0 11.988 0 21.125 0 27.12.03 35.05.16 36.59.45 5.42 1.3 8.83 3.1 12.56 3.44 7.14 10.01 12.5 17.75 14.5 2.68.69 5.64 1.07 9.44 1.25 1.61.07 18.02.12 34.44.12 16.42 0 32.84-.02 34.41-.1 4.4-.207 6.955-.55 9.78-1.28a27.22 27.22 0 0017.75-14.53c1.765-3.64 2.66-7.18 3.065-12.317.088-1.12.125-18.977.125-36.81 0-17.836-.04-35.66-.128-36.78-.41-5.22-1.305-8.73-3.127-12.44-1.495-3.037-3.155-5.305-5.565-7.624-4.3-4.108-9.56-6.608-15.829-7.512C102.338.157 101.733.027 86.193 0z"
                                    fill="url(#ig_d)" />
                                <path d="M65.003 17c-13.036 0-14.672.057-19.792.29-5.11.234-8.598 1.043-11.65 2.23-3.157 1.226-5.835 2.866-8.503 5.535-2.67 2.668-4.31 5.346-5.54 8.502-1.19 3.053-2 6.542-2.23 11.65C17.06 50.327 17 51.964 17 65s.058 14.667.29 19.787c.235 5.11 1.044 8.598 2.23 11.65 1.227 3.157 2.867 5.835 5.536 8.503 2.667 2.67 5.345 4.314 8.5 5.54 3.054 1.187 6.543 1.996 11.652 2.23 5.12.233 6.755.29 19.79.29 13.037 0 14.668-.057 19.788-.29 5.11-.234 8.602-1.043 11.656-2.23 3.156-1.226 5.83-2.87 8.497-5.54 2.67-2.668 4.31-5.346 5.54-8.502 1.18-3.053 1.99-6.542 2.23-11.65.23-5.12.29-6.752.29-19.788 0-13.036-.06-14.672-.29-19.792-.24-5.11-1.05-8.598-2.23-11.65-1.23-3.157-2.87-5.835-5.54-8.503-2.67-2.67-5.34-4.31-8.5-5.535-3.06-1.187-6.55-1.996-11.66-2.23-5.12-.233-6.75-.29-19.79-.29zm-4.306 8.65c1.278-.002 2.704 0 4.306 0 12.816 0 14.335.046 19.396.276 4.68.214 7.22.996 8.912 1.653 2.24.87 3.837 1.91 5.516 3.59 1.68 1.68 2.72 3.28 3.592 5.52.657 1.69 1.44 4.23 1.653 8.91.23 5.06.28 6.58.28 19.39s-.05 14.33-.28 19.39c-.214 4.68-.996 7.22-1.653 8.91-.87 2.24-1.912 3.835-3.592 5.514-1.68 1.68-3.275 2.72-5.516 3.59-1.69.66-4.232 1.44-8.912 1.654-5.06.23-6.58.28-19.396.28-12.817 0-14.336-.05-19.396-.28-4.68-.216-7.22-.998-8.913-1.655-2.24-.87-3.84-1.91-5.52-3.59-1.68-1.68-2.72-3.276-3.592-5.517-.657-1.69-1.44-4.23-1.653-8.91-.23-5.06-.276-6.58-.276-19.398s.046-14.33.276-19.39c.214-4.68.996-7.22 1.653-8.912.87-2.24 1.912-3.84 3.592-5.52 1.68-1.68 3.28-2.72 5.52-3.592 1.692-.66 4.233-1.44 8.913-1.655 4.428-.2 6.144-.26 15.09-.27zm29.928 7.97a5.76 5.76 0 105.76 5.758c0-3.18-2.58-5.76-5.76-5.76zm-25.622 6.73c-13.613 0-24.65 11.037-24.65 24.65 0 13.613 11.037 24.645 24.65 24.645C78.616 89.645 89.65 78.613 89.65 65S78.615 40.35 65.002 40.35zm0 8.65c8.836 0 16 7.163 16 16 0 8.836-7.164 16-16 16-8.837 0-16-7.164-16-16 0-8.837 7.163-16 16-16z"
                                    fill="#fff" />
                            </svg>
                        </a>
                    </div>
                </div>

                {
                    windowSize > 768 && <NavLinks />
                }

            </nav>
            {
                windowSize <= 768 &&
                <div id="mobilenav"
                    className="pt-[14%] md:pt-[13%]">
                    <TWBurgerButton
                        barstyle={`w-8 h-1 md:w-18 mb-1 rounded-lg ${goldStyle}`}
                        containerstyle='h-6 w-8 md:w-18 top-[7vh] mr-[5%] right-0 '
                        onClick={(): void => setIsClicked(!isClicked)}
                        defaultClickState={isClicked}
                    />
                    {
                        isClicked && <NavLinks />
                    }
                </div>
            }
        </div>
    )
}

export default Navbar