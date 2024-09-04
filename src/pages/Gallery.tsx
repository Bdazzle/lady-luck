import React, { useEffect, useRef, useState } from "react"
import Navbar from "../components/Navbar"
import b2 from "../assets/gallery/B2.jpg"
import b3 from "../assets/gallery/B3.jpg"
import b12 from "../assets/gallery/B12Poker.jpg"
import bj from "../assets/gallery/BJCloseupCards.jpg"
import bjcut from "../assets/gallery/BJCuttingCard.jpg"
import bjclose2 from "../assets/gallery/BlackjackCloseup2.jpg"
import c6 from "../assets/gallery/C6.jpg"
import tray from "../assets/gallery/PokerChipTray.jpg"
import pEJ from "../assets/gallery/PokerEugeneandJosh.jpg"
import r12 from "../assets/gallery/R12.jpg"
import r1 from "../assets/gallery/Roulette1.jpg"
import rtable from "../assets/gallery/Rtable.jpg"
import { goldText } from "../constants"

const bjImageData: { path: string, alt: string }[] = [
    { path: b3, alt: "a dealer dealing a hand of blackjack being dealt." },
    { path: bj, alt: "a hand of blackjack being resolved." },
    { path: bjcut, alt: "a player cutting the deck with a cut card." },
    { path: bjclose2, alt: "a table of blackjack hands." },
    { path: c6, alt: "a group of excited people winning at blackjack." }
]

const pokerImageData: { path: string, alt: string }[] = [
    { path: b2, alt: "a table of Texas hold 'em poker being dealt." },
    { path: b12, alt: "a table of Texas hold 'em poker players placing bets." },
    { path: pEJ, alt: "players in thought while placing bets." },
    { path: tray, alt: "poker chips in a tray in a poker table." },
]

const rouletteImageData: { path: string, alt: string }[] = [
    { path: rtable, alt: "players placing bets on a roulette table." },
    { path: r12, alt: "chips being cleaned up on a roulette table." },
    { path: r1, alt: "wooden roulette wheel." },
]

/*
if index = 0 (first image), no margins.
if last image, set to container width - image width + padding(negative number)
for whatever reason, all indented margin instances are containerwidth-images.length-index-2, maybe -2 because 1st and last images don't have margin calcs?
some images have different width and padding requirements because they were taken off different devices?
*/
const calcMargin = (containerWidth: number, imageWidth: number, index: number, imageDataLength: number, padding: number) => {
    const val = imageDataLength - index - 2;
    const margin = index === 0 ? 0 :
        index === imageDataLength - 1 ? containerWidth - imageWidth + padding:
            Math.round(containerWidth / ((imageDataLength - val) / index)) - (imageWidth / 2) + padding;
    return margin
}

const Gallery: React.FC = ({ }) => {
    const [bjAnimated, setbjAnimated] = useState<boolean>(false);
    const [pokerAnimated, setPokerAnimated] = useState<boolean>(false);
    const [rouletteAnimated, setRouletteAnimated] = useState<boolean>(false);
    const containerRef = useRef<HTMLDivElement>(null)
    const [containerWidth, setContainerWidth] = useState<number>()
    const bjContainerRef = useRef<HTMLDivElement>(null)
    const pokerContainerRef = useRef<HTMLDivElement>(null)
    const rouletteContainerRef = useRef<HTMLDivElement>(null)

    const bjObserver = new IntersectionObserver((entries) => {
        const entry = entries[0]
        if (entry.isIntersecting) setbjAnimated(entry.isIntersecting)
    }, { threshold: 0.25 })

    const pokerObserver = new IntersectionObserver((entries) => {
        const entry = entries[0]
        /*
        ref size is set to nothing while images are loading, which makes it in view, triggering observer
        but also makes intersectionRatio 1, but this will trigger @ ratio=.25.
        so if ratio=1 is not when I want things to trigger.
        */
        if (entry.isIntersecting && entry.intersectionRatio < 1) setPokerAnimated(entry.isIntersecting)
    }, { threshold: 0.25 })

    const rouletteObserver = new IntersectionObserver((entries) => {
        const entry = entries[0]
        /*
        ref size is set to nothing while images are loading, which makes it in view, triggering observer
        but also makes intersectionRatio 1, but this will trigger @ ratio=.4.
        so if ratio=1 is not when I want things to trigger.
        */
        if (entry.isIntersecting && entry.intersectionRatio < 1) setRouletteAnimated(entry.isIntersecting)
    }, { threshold: 0.25 })

    useEffect(() => {
        bjObserver.observe(bjContainerRef.current as HTMLDivElement)
        pokerObserver.observe(pokerContainerRef.current as HTMLDivElement)
        rouletteObserver.observe(rouletteContainerRef.current as HTMLDivElement)
        // when the component gets mounted
        setContainerWidth(containerRef.current?.offsetWidth);
        // to handle page resize
        const getwidth = () => {
            setContainerWidth(containerRef.current?.offsetWidth);
        };
        window.addEventListener("resize", getwidth);
        // remove the event listener before the component gets unmounted
        return () => {
            bjObserver.disconnect()
            pokerObserver.disconnect()
            rouletteObserver.disconnect()
            window.removeEventListener("resize", getwidth);
        }
    }, []);

    return (
        <div id="gallery_content" className="">
            <Navbar />
            <div className="mt-28 mx-[10%] w-[80vw]" id="gallery"
                ref={containerRef}
            >
                <div id="bj" ref={bjContainerRef}>
                    <h1 className={`${goldText} text-center text-4xl mb-4 font-bold `}>Black Jack</h1>
                    <div id="bj_image_container"
                        className={`flex flex-col justify-between my-4 w-full h-full hover:bg-primaryPurple group-hover:bg-primaryPurple bg-midpurple md:bg-none rounded lg:min-w-[711px] px-4 py-2`}>
                        {
                            bjImageData.map((i, index) => {
                                /*
                                amount of space to indent based on container width and total images, 
                                but the first image will never be indented, so length-1
                                */
                                // const indentUnit = containerWidth && containerWidth / bjImageData.length - 1

                                /*
                                indent unit * index - half of the image width + padding on each side(32).
                                first image won't - half image width since starts on left @ (0,0)
                                last image should be placed at end of container - image width - padding on each side(32)
                                */
                                //if image.length%2=1 (odd), middle image should be container width/2 - half image w - padding
                                // const marginSize = index === 1 ? Math.round((indentUnit! * index) / 2) + 32 :
                                //     index === 2 ? containerWidth!/index - 280 - 32 :
                                //         index === 3 ? Math.round((indentUnit! * index)) - 250 + 32 :
                                //             index === 4 ? containerWidth! - 412 - 32  : 0

                                const imageWidth = index === 2 ? 560 : index === 4 ? 412 : 500;
                                const padding = index === 1 || index === 3 ? 32 : -32;
                                const marginSize = calcMargin(containerWidth!, imageWidth, index, bjImageData.length, padding)

                                return <div id={`bj${index}`}
                                    key={`bj${index}`}
                                    className={`wrapper my-2`}
                                    style={window.innerWidth > 768 ? {
                                        transition: bjAnimated ? `transform ${index * 500}ms ease-in-out ${index * 100}ms, opacity ${index === 0 ? 500 : index * 500}ms ease-in-out` : ``,
                                        transform: bjAnimated ? `translateX(${marginSize}px)` : ``,
                                        opacity: bjAnimated ? 1 : 0
                                    } : {
                                        transition: bjAnimated ? `opacity ${index === 0 ? 500 : index * 500}ms ease-in-out` : ``,
                                        opacity: bjAnimated ? 1 : 0
                                    }}
                                >
                                    <img src={i.path} alt={i.alt}
                                        className={` aspect-ratio rounded ${index === 0 || index === 4 ? `max-h-[500px] ` : `max-h-[375px] `} relative`}
                                        style={{
                                            boxShadow: '2px 2px 2px rgba(0,0,0,0.4), -2px -2px 2px rgba(0,0,0,0.4)',
                                        }}
                                    ></img>
                                </div>
                            })
                        }
                    </div>
                </div>
                <div id="poker" ref={pokerContainerRef}>
                    <h1 className={`${goldText} text-center text-4xl mb-4 font-bold `}>Poker</h1>
                    <div id="poker_image_container"
                        className={`flex flex-col items-end my-4 w-full h-full hover:bg-primaryPurple group-hover:bg-primaryPurple bg-midpurple md:bg-none rounded lg:min-w-[711px] px-4 py-2`}>
                        {
                            pokerImageData.map((i, index) => {
                                /*
                                amount of space to indent based on container width and total images, 
                                but the first image will never be indented, so length-1
                                */
                                // const indentUnit = containerWidth && containerWidth / pokerImageData.length - 1

                                /*
                                indent unit * index - half of the image width + padding since right to left.
                                last image should be placed at end of container - image width - padding on each side(32)
                                */
                                // const marginSize = index === 1 ? Math.round((indentUnit! * index)/2) + 32  :
                                //     index === 2 ? Math.round((indentUnit! * index) - 500/2) + 32 :
                                //         index === 3 ? containerWidth! - 500 - 32 : 0

                                const padding = index === 3 ? -32 : 32;
                                const marginSize = calcMargin(containerWidth!, 500, index, pokerImageData.length, padding)

                                return <div key={`poker${index}`}
                                    className={`wrapper my-2 `}
                                    style={window.innerWidth > 768 ? {
                                        transition: pokerAnimated ? `transform ${index * 500}ms ease-in-out ${index * 100}ms, opacity ${index === 0 ? 500 : index * 500}ms ease-in-out` : ``,
                                        transform: pokerAnimated ? `translateX(-${marginSize}px)` : ``,
                                        opacity: pokerAnimated ? 1 : 0
                                    } : {
                                        transition: pokerAnimated ? `opacity ${index === 0 ? 500 : index * 500}ms ease-in-out` : ``,
                                        opacity: pokerAnimated ? 1 : 0
                                    }}
                                >
                                    <img src={i.path} alt={i.alt}
                                        className={`aspect-ratio rounded md:max-w-[500px] relative`}
                                        style={{
                                            boxShadow: '2px 2px 2px rgba(0,0,0,0.4), -2px -2px 2px rgba(0,0,0,0.4)'
                                        }}
                                    ></img>
                                </div>
                            })
                        }
                    </div>
                </div>
                <div id="roulette" ref={rouletteContainerRef}>
                    <h1 className={`${goldText} text-center text-4xl mb-4 font-bold `}>Roulette</h1>
                    <div id="roulette_image_container"
                        className={`flex flex-col justify-between my-4 w-full h-full hover:bg-primaryPurple group-hover:bg-primaryPurple bg-midpurple md:bg-none rounded lg:min-w-[711px] px-4 py-2`}>
                        {
                            rouletteImageData.map((i, index) => {
                                /*
                                no need to measure indentUnit since only 3 images.
                                last image should be placed at end of container - image width - padding on each side(32)
                                */
                                const marginSize = index === 1 ? containerWidth! / 2 - 250 - 16 :
                                    index === 2 ? containerWidth! - 500 - 32 : 0

                                return <div key={`roulette${index}`}
                                    className={`wrapper my-2 ${index === 0 ? `max-h-[500px] max-w-[375px]` : `max-h-[375px] max-w-[500px] `}`}
                                    style={window.innerWidth > 768 ? {
                                        transition: rouletteAnimated ? `transform ${index * 500}ms ease-in-out ${index * 100}ms, opacity ${index === 0 ? 500 : index * 500}ms ease-in-out` : ``,
                                        transform: rouletteAnimated ? `translateX(${marginSize}px)` : ``,
                                        opacity: rouletteAnimated ? 1 : 0
                                    } : {
                                        transition: rouletteAnimated ? `opacity ${index === 0 ? 500 : index * 500}ms ease-in-out` : ``,
                                        opacity: rouletteAnimated ? 1 : 0
                                    }}
                                >
                                    <img src={i.path} alt={i.alt}
                                        className={`aspect-ratio rounded ${index === 0 ? `max-h-[500px]` : `max-h-[375px]`} relative`}
                                        style={{
                                            boxShadow: '2px 2px 2px rgba(0,0,0,0.4), -2px -2px 2px rgba(0,0,0,0.4)'
                                        }}
                                    ></img>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gallery