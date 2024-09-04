import React, { useEffect, useRef, useState } from "react"
import { goldStyle, goldText } from "../constants"
import logo from "../assets/logo-inverted-mid.png"
import { FacebookShareButton } from "react-share"
import TWBurgerButton from "./TWBurgerButton"
import { NavLinks, MobileNavLinks } from "./NavLinks"
import JSONLD from "./JSONLD"
import { useLocation } from "react-router-dom"

const JSONLDdata = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Lady Luck - Martha's Vineyard Casino",
    "description": "Casino and gambling event and party services for Martha's Vineyard.",
    "url": "https://ladyluckmv.com",
    "image":"/assets/logo-inverted-mid-DcUH6mw9.png",
    "telephone" : "+1-508-560-5649",
    "email":"mvcasinoco@gmail.com",
    "areaServed": [
        {
            "@type": "GeoCircle",
            "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": "41.24",
                "longitude": "70.37"
            },
            "geoRadius": "10 mi"
        },
        {
            "@type": "Place",
            "name": "West Tisbury, Martha's Vineyard, Massachusetts",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "West Tisbury",
                "addressRegion": "MA",
                "addressCountry": "US",
                "postalCode": "02575"
            }
        },
        {
            "@type": "Place",
            "name": "Tisbury (Vineyard Haven), Martha's Vineyard, Massachusetts",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Vineyard Haven",
                "addressRegion": "MA",
                "addressCountry": "US",
                "postalCode": "02568"
            }
        },
        {
            "@type": "Place",
            "name": "Oak Bluffs, Martha's Vineyard, Massachusetts",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Oak Bluffs",
                "addressRegion": "MA",
                "addressCountry": "US",
                "postalCode": "02557"
            }
        },
        {
            "@type": "Place",
            "name": "Edgartown, Martha's Vineyard, Massachusetts",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Edgartown",
                "addressRegion": "MA",
                "addressCountry": "US",
                "postalCode": "02539"
            }
        },
        {
            "@type": "Place",
            "name": "Aquinnah & Chilmark, Martha's Vineyard, Massachusetts",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Aquinnah & Chilmark",
                "addressRegion": "MA",
                "addressCountry": "US",
                "postalCode": "02535"
            }
        }
    ]
}
interface NavProps {
    translateY?: number
}

const Navbar: React.FC<NavProps> = ({ }) => {
    const logoRef = useRef<HTMLHeadingElement>(null)
    const [isClicked, setIsClicked] = useState<boolean>(false)
    const location = useLocation()

    useEffect(() =>{
        window.scrollTo(0,0)
    },[location])

    useEffect(() => {
        const resize = () => {
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
            <JSONLD data={JSONLDdata} />
            <nav id="nav" role="navigation" aria-label="Primary"
                className="fixed lg:h-24 w-full flex flex-col lg:justify-center lg:items-center lg:flex-row mt-0 bg-black z-10"
            >
                <div id="logocontainer"
                    className={`flex flex-row lg:h-20 w-full lg:w-1/2 justify-evenly`}
                >
                    <img src={logo}
                        className="h-12 md:h-20"
                        itemProp="logo"
                        alt="Ladu Luck company logo"
                    />
                    <h1 ref={logoRef} itemProp="name"
                        id="navlogo"
                        className={`${goldText} font-bold font-crimson-text text-4xl text-center lg:text-6xl w-[50%]`} >
                        Lady Luck
                    </h1>
                    <div id="socials"
                        className="h-12 flex flex-row align-top"
                    >
                        <FacebookShareButton children={
                            <svg viewBox="0 0 64 64" width="40" height="40">
                                <rect width="64" height="64" rx="0" ry="0" fill="#000">
                                </rect>
                                <path d="M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2 c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z" fill="white">
                                </path>
                            </svg>
                        }
                            url={"https://www.facebook.com/ladyluckmv"} />
                        <a id='ig' href="https://www.instagram.com/ladyluckmv" target="_blank"
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
                        <a id="tiktok" href="" target="_blank"
                            className="w-[40px] h-[40px]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" viewBox="0 0 250 250">
                                <g clipRule="evenodd" fillRule="evenodd">
                                    <path d="M25 0h200c13.808 0 25 11.192 25 25v200c0 13.808-11.192 25-25 25H25c-13.808 0-25-11.192-25-25V25C0 11.192 11.192 0 25 0z" fill="#010101" />
                                    <path d="M156.98 230c7.607 0 13.774-6.117 13.774-13.662s-6.167-13.663-13.774-13.663h-2.075c7.607 0 13.774 6.118 13.774 13.663S162.512 230 154.905 230z" fill="#ee1d51" />
                                    <path d="M154.717 202.675h-2.075c-7.607 0-13.775 6.118-13.775 13.663S145.035 230 152.642 230h2.075c-7.608 0-13.775-6.117-13.775-13.662s6.167-13.663 13.775-13.663z" fill="#66c8cf" />
                                    <ellipse cx="154.811" cy="216.338" fill="#010101" rx="6.699" ry="6.643" />
                                    <path d="M50 196.5v6.925h8.112v26.388h8.115v-26.201h6.603l2.264-7.112zm66.415 0v6.925h8.112v26.388h8.115v-26.201h6.603l2.264-7.112zm-39.81 3.93c0-2.17 1.771-3.93 3.959-3.93 2.19 0 3.963 1.76 3.963 3.93s-1.772 3.93-3.963 3.93c-2.188-.001-3.959-1.76-3.959-3.93zm0 6.738h7.922v22.645h-7.922zM87.924 196.5v33.313h7.925v-8.608l2.453-2.248L106.037 230h8.49l-11.133-16.095 10-9.733h-9.622l-7.923 7.86V196.5zm85.47 0v33.313h7.926v-8.608l2.452-2.248L191.509 230H200l-11.133-16.095 10-9.733h-9.622l-7.925 7.86V196.5z" fill="#ffffff" />
                                    <path d="M161.167 81.186c10.944 7.819 24.352 12.42 38.832 12.42V65.755a39.26 39.26 0 0 1-8.155-.853v21.923c-14.479 0-27.885-4.601-38.832-12.42v56.835c0 28.432-23.06 51.479-51.505 51.479-10.613 0-20.478-3.207-28.673-8.707C82.187 183.57 95.23 189.5 109.66 189.5c28.447 0 51.508-23.047 51.508-51.48V81.186zm10.06-28.098c-5.593-6.107-9.265-14-10.06-22.726V26.78h-7.728c1.945 11.09 8.58 20.565 17.788 26.308zm-80.402 99.107a23.445 23.445 0 0 1-4.806-14.256c0-13.004 10.548-23.547 23.561-23.547a23.6 23.6 0 0 1 7.147 1.103V87.022a51.97 51.97 0 0 0-8.152-.469v22.162a23.619 23.619 0 0 0-7.15-1.103c-13.013 0-23.56 10.543-23.56 23.548 0 9.195 5.272 17.157 12.96 21.035z" fill="#ee1d52" />
                                    <path d="M153.012 74.405c10.947 7.819 24.353 12.42 38.832 12.42V64.902c-8.082-1.72-15.237-5.942-20.617-11.814-9.208-5.743-15.843-15.218-17.788-26.308H133.14v111.239c-.046 12.968-10.576 23.468-23.561 23.468-7.652 0-14.45-3.645-18.755-9.292-7.688-3.878-12.96-11.84-12.96-21.035 0-13.005 10.547-23.548 23.56-23.548 2.493 0 4.896.388 7.15 1.103V86.553c-27.945.577-50.42 23.399-50.42 51.467 0 14.011 5.597 26.713 14.68 35.993 8.195 5.5 18.06 8.707 28.673 8.707 28.445 0 51.505-23.048 51.505-51.479z" fill="#ffffff" />
                                    <path d="M191.844 64.902v-5.928a38.84 38.84 0 0 1-20.617-5.887 38.948 38.948 0 0 0 20.617 11.815zM153.439 26.78a39.524 39.524 0 0 1-.427-3.198V20h-28.028v111.24c-.045 12.967-10.574 23.467-23.56 23.467-3.813 0-7.412-.904-10.6-2.512 4.305 5.647 11.103 9.292 18.755 9.292 12.984 0 23.515-10.5 23.561-23.468V26.78zm-44.864 59.773v-6.311a51.97 51.97 0 0 0-7.067-.479C73.06 79.763 50 102.811 50 131.24c0 17.824 9.063 33.532 22.835 42.772-9.083-9.28-14.68-21.982-14.68-35.993 0-28.067 22.474-50.889 50.42-51.466z" fill="#69c9d0" />
                                    <path d="M154.904 230c7.607 0 13.775-6.117 13.775-13.662s-6.168-13.663-13.775-13.663h-.188c-7.607 0-13.774 6.118-13.774 13.663S147.109 230 154.716 230zm-6.792-13.662c0-3.67 3-6.643 6.7-6.643 3.697 0 6.697 2.973 6.697 6.643s-3 6.645-6.697 6.645c-3.7-.001-6.7-2.975-6.7-6.645z" fill="#ffffff" />
                                </g>
                            </svg>
                        </a>
                    </div>
                </div>
                <div id="desktop_nav"
                    className={'invisible lg:visible h-0 lg:h-24 w-1/2'}
                >
                    <NavLinks />
                </div>
                <div id="mobilenav"
                    className="lg:invisible">
                    <TWBurgerButton
                        barstyle={`w-8 h-1 md:w-18 mb-1 rounded-lg ${goldStyle}`}
                        containerstyle='h-6 w-8 md:w-18 top-[7vh] mr-[5%] right-0 '
                        onClick={(): void => setIsClicked(!isClicked)}
                        defaultClickState={isClicked}
                    />
                    {
                        isClicked && <MobileNavLinks />
                    }
                </div>
            </nav>

        </div>
    )
}

export default Navbar