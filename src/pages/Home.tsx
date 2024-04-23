import React, { useEffect, useRef, useState } from "react"
import Navbar from "../components/Navbar"
import blackjack from '../assets/blackjack.jpg'
import roulette from '../assets/roulette.jpg'
import PerspectiveImage from "../components/PerspectiveImage"
import logo from "../assets/logo-inverted-mid.png"
import ScrollingText from "../components/ScrollingText"


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
            <div className="md:mt-24 ">
                <div id="content"
                    className="text-white px-8 lg:mt-0 flex flex-col items-center"
                >
                    <img src={logo}
                        className="max-w-[466px]"
                    />
                    <p className="text-2xl"

                    >Welcome to lady luck - Martha’s Vineyard casino company.
                        We are here to bring a fun and exciting casino night experience to your party, get together, wedding, or shindig.
                    </p>
                    <div id="top_observer_container"
                        ref={topRef}
                    >
                        <div
                            className={`${topVis ? `animate-expand` : 'animate-compress'}  p-4 my-10 hover:bg-primaryPurple flex flex-col lg:flex-row items-center bg-midpurple rounded `}>
                            <PerspectiveImage src={blackjack} alt={"a hand of blackjack"} scaleFactor={1}
                                wrapperClass="max-w-[466px]"
                                containerStyle={{
                                    boxShadow: '3px 3px 3px rgba(0,0,0,0.4), -3px -3px 3px rgba(0,0,0,0.4)'
                                }}
                                imageStyle={{
                                    boxShadow: '2px 2px 2px rgba(0,0,0,0.4), -2px -2px 2px rgba(0,0,0,0.4)'
                                }}
                            />
                            <p className="text-2xl lg:px-4 py-2">
                                We offer multiple table games, professional dealers, and prize packages* valued at over $300 for two of your lucky guests.
                            </p>
                        </div>
                    </div>
                    <div id="mid_observer_container"
                        ref={midRef}
                        className="group flex flex-col lg:flex-row-reverse items-center py-4 ">
                        <div className=" lg:rounded lg:flex lg:flex-row-reverse md:group-hover:bg-primaryPurple md:bg-midpurple rounded">
                            <div
                                className={`${midVis ? `animate-expand` : 'animate-compress'} hover:bg-primaryPurple group-hover:bg-primaryPurple bg-midpurple md:bg-none rounded lg:min-w-[711px] p-4 my-10 flex flex-col lg:flex-row items-center`}>
                                <PerspectiveImage src={roulette} alt={"a roulette wheel"} scaleFactor={2}
                                    wrapperClass="max-w-[466px]"
                                    imageClass={"md:max-w-xl"}
                                    containerClass={"md:w-full"}
                                    containerStyle={{
                                        boxShadow: '3px 3px 3px rgba(0,0,0,0.4), -3px -3px 3px rgba(0,0,0,0.4)'
                                    }}
                                    imageStyle={{
                                        boxShadow: '2px 2px 2px rgba(0,0,0,0.4), -2px -2px 2px rgba(0,0,0,0.4)'
                                    }}
                                />
                                <div className="flex flex-row justify-center text-2xl min-w-[205px] lg:mx-4">
                                    <p className="underline text-center">
                                        We offer :&nbsp;
                                    </p>
                                    <ScrollingText words={['Blackjack', 'Poker', 'Roulette']}
                                        // speed={200}
                                        fontStyle={{
                                            fontSize: '1.5rem',
                                            textDecoration: 'underline'
                                        }}
                                        containerSize='2rem'
                                    />
                                </div>
                            </div>
                            <p className="px-8 py-4 text-2xl">
                                If you’d like to have Lady Luck by your side at your next event,
                                feel free to contact us via phone, text, or email to get the party started.
                            </p>
                        </div>
                    </div>

                    *prize packages are included for parties with 3 tables or more


                    we also provide other party services - catering, DJs, etc.
                </div>
            </div>
        </div>
    )
}

export default Home