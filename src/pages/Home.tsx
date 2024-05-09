import React, { useEffect, useRef, useState } from "react"
import Navbar from "../components/Navbar"
import blackjack from '../assets/blackjack.jpg'
import roulette from '../assets/roulette.jpg'
import logo from "../assets/logo-only.png"
import emailLogo from "../assets/logo-email.png"
import phoneLogo from "../assets/logo-phone.png"
import C2Cbutton from "../components/C2Cbutton"

const Home: React.FC = ({ }) => {
    const [Ytranslate, setYtranslate] = useState<number>(0)
    const logoRef = useRef<HTMLHeadingElement>(null)
    const [topVis, setTopVis] = useState<boolean>(false)
    const topRef = useRef<HTMLDivElement>(null)
    const midRef = useRef<HTMLDivElement>(null);
    const [midVis, setMidVis] = useState<boolean>(false)

    const handleScroll = () => {
        const scrollTop = window.scrollY;
        const logoHeight = logoRef.current?.offsetHeight as number;
        const ydiff = scrollTop - logoHeight

        /* top of the screen is y=0 
        transition from logo height to top of page
        */
        if (ydiff <= 0) {
            setYtranslate(scrollTop - logoHeight)
        }
        /* makes sure that logo has transitioned completely to 0 if scrolled lower than logo height */
        if (scrollTop > logoHeight) {
            setYtranslate(0)
        }
    }

    const resetLogoOnResize = () => {
        if (window.screenY === 0) {
            setYtranslate(80)
        }
    }

    /* 
    DO NOT ANIMATE THE OBSERVER CONTAINER
    animate the children of observer instead
    */
    const topObserver = new IntersectionObserver((entries) => {
        const entry = entries[0]
        /*
        check to see if screen is scrolling down.
        If bellow element, boundingClientRect.top = negative
        */
        // if (entry.boundingClientRect.top > 400) {// uncomment if only want animation when scrolling down
        setTopVis(entry.isIntersecting)
        // console.log(entry.boundingClientRect.top)
        // }
    },
        { threshold: 0.25 } //% of element visible before triggering
    )
    const midObserver = new IntersectionObserver((entries) => {
        const entry = entries[0]
        setMidVis(entry.isIntersecting)
    },
        { threshold: 0.25 } //% of element visible before triggering
    )

    useEffect(() => {
        topObserver.observe(topRef.current as HTMLDivElement)
        midObserver.observe(midRef.current as HTMLDivElement)
        window.addEventListener('resize', resetLogoOnResize)
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('resize', resetLogoOnResize);
            window.removeEventListener('scroll', handleScroll);
            topObserver.disconnect();
            midObserver.disconnect();
        };
    }, [])

    return (
        <div className="h-full"
            onScroll={() => handleScroll()} >
            <Navbar
                translateY={Ytranslate}
            />
            <div className="mt-20">
                <div id="content" itemProp="mainContentOfPage"
                    className="text-white px-4 lg:mt-0 flex flex-col items-center "
                >
                    <div id="title_wrapper" className="mb-4 md:mt-2 w-3/4 md:w-1/3 h-14 flex justify-center items-center">
                        <p className={`text-center text-4xl font-semibold`}>
                            Welcome To...
                        </p>
                    </div>
                    <div id="home_logo_container"
                        className="flex flex-col justify-center items-center w-full mb-4">
                        <img src={logo}
                            className="md:max-w-[466px]"
                        />
                        <a className="md:max-w-[466px] border-b border-blue-600 my-2"
                            href="mailto:mvcasinoco@gmail.com?Subject=" target="_blank" rel="noreferrer" itemProp="email">
                            <img className="py-2" src={emailLogo}></img>
                        </a>
                        <a className="md:max-w-[466px] border-b border-blue-600"
                            href="tel:5085605649" itemProp="telephone">
                            <img className="py-2" src={phoneLogo}></img>
                        </a>
                    </div>
                    <C2Cbutton />
                    <p className="text-3xl pt-4 px-8 text-center font-semibold">
                        An authentic casino night experience your party guests will never forget!
                    </p>
                    <p className="text-2xl pt-4 px-8 text-center">
                        We are here to bring a fun and exciting casino night experience to your party, get together, wedding, or shindig.
                    </p>
                    <div id="top_observer_container"
                        ref={topRef}
                    >
                        <div
                            className={`${topVis ? `animate-expand` : 'animate-compress'}  p-4 mt-10 hover:bg-primaryPurple flex flex-col lg:flex-row items-center bg-midpurple rounded `}>
                            <div className="md:max-w-[466px]"
                                style={{
                                    overflow: 'hidden',
                                    boxShadow: '2px 2px 2px rgba(0,0,0,0.4), -2px -2px 2px rgba(0,0,0,0.4)'
                                }}>
                                <img src={blackjack} alt="a hand of blackjack"
                                    className=""
                                    style={{
                                        boxShadow: '2px 2px 2px rgba(0,0,0,0.4), -2px -2px 2px rgba(0,0,0,0.4)'
                                    }}
                                ></img>
                            </div>
                            <p className="text-2xl px-8 py-2 text-center">
                                We offer multiple table games, professional dealers, and prize packages* valued at over $300 for two of your lucky guests.
                            </p>
                        </div>
                    </div>
                    <div id="mid_observer_container"
                        ref={midRef}
                        className="group flex flex-col lg:flex-row-reverse items-center py-4 ">
                        <div className={`${midVis ? `animate-expand` : 'animate-compress'} lg:rounded lg:flex lg:flex-row-reverse md:group-hover:bg-primaryPurple md:bg-midpurple rounded md:pt-10 lg:pt-0 pt-5`}>
                            <div
                                className={` hover:bg-primaryPurple group-hover:bg-primaryPurple bg-midpurple md:bg-none rounded lg:min-w-[711px] p-4 flex flex-col lg:flex-row items-center`}>
                                <div className="md:max-w-[500px]"
                                    style={{
                                        overflow: 'hidden',
                                        boxShadow: '2px 2px 2px rgba(0,0,0,0.4), -2px -2px 2px rgba(0,0,0,0.4)'
                                    }}>
                                    <img src={roulette} alt="roulette wheel"
                                        className="md:max-w-[500px] "
                                    ></img>
                                </div>
                                <div className="text-2xl min-w-[205px] lg:mx-4">
                                    <p className="underline text-center">
                                        We offer :&nbsp;
                                    </p>
                                    <p className="underline text-center">
                                        Blackjack, Poker, and Roulette!
                                    </p>
                                </div>
                            </div>
                            <div id="lg_box_text"
                                className="flex flex-col items-center">
                                <p className="px-8 py-4 text-2xl text-center">
                                    If you’d like to have Lady Luck by your side at your next event,
                                    feel free to contact us via phone, text, or email to get the party started.
                                </p>
                                
                            </div>
                        </div>
                        
                    </div>
                    <C2Cbutton />
                    <div id="foot_notes" className="text-sm">
                        <p>
                            * For entertainment purposes only.
                        </p>
                        <p>
                            * We operate fully legally only in the state of MA, and follow all stipulations and regulations set forth by the MA Gaming Commission.
                        </p>
                        <p>
                            * Prize packages are included for parties with 3 tables or more
                        </p>
                        <p>
                            Ask us about our other party services - catering, DJ’s, etc.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home