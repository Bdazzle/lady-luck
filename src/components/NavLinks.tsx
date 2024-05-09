import { Link, useLocation } from "react-router-dom";
import FlipCard from "./FlipCard";
import { goldText, routeList, underlineAnimation } from "../constants";
import cardFaces from "../SVGs/cardFaces"

const cards = ['ace', 'king', 'queen', 'jack', 'aceOfHearts']

const NavLinks: React.FC = ({ }) => {
    const currentRoute = useLocation()
   
    return (
        <div id="linksContainer"
            className="flex flex-row justify-around w-full items-end static py-0 bg-black animate-none ml-0 rounded"
        >
            {
                routeList.filter(r => {
                    const path = r === '/home' ? '/' : r;
                    return path !== currentRoute.pathname
                }).map((path: string, index: number) => {
                    const pathTo = path === '/home' ? '/' : path;
                    const playingCard = cards[index];
                    const linkName = path.slice(1, path.length)
                    const cardHeight = '60px';
                    const cardWidth = '43px'
                    return (
                        <div key={`${path}_wrapper`} 
                        className={"group h-full flex flex-row-reverse py-1 w-full lg:flex-col justify-between items-end pr-2"} >
                            <FlipCard
                                front={cardFaces('lg')[playingCard as string]}
                                back={<div className={`bg-black`} style={{
                                    width: cardWidth,
                                    height: cardHeight
                                }}></div>}
                                height={cardHeight}
                                width={cardWidth}
                                timing={(index + 1) * 200 }
                            />
                            <div className="lg:grid lg:place-items-end pl-2">
                                <Link key={path} to={pathTo} className={`${goldText} font-bold font-roboto left-0 mb-0 text-xl`}>
                                    {linkName.charAt(0).toLocaleUpperCase().concat(linkName.slice(1, linkName.length))}
                                </Link>
                                <div className={`${underlineAnimation} bottom-0`} ></div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

const MobileNavLinks: React.FC = ({ }) => {
    const currentRoute = useLocation()
   
    return (
        <div id="mobile_linksContainer"
            className="flex z-10 flex-col absolute ml-0 w-1/3 bg-darkPurple py-2 rounded animate-leftSlide"
        >
            {
                routeList.filter(r => {
                    const path = r === '/home' ? '/' : r;
                    return path !== currentRoute.pathname
                }).map((path: string, index: number) => {
                    const pathTo = path === '/home' ? '/' : path;
                    const playingCard = cards[index];
                    const linkName = path.slice(1, path.length)
                    const cardHeight = '60px';
                    const cardWidth = '43px'
                    return (
                        <div key={`${path}_wrapper`} 
                        className={"group h-full flex flex-row-reverse py-1 w-full lg:flex-col justify-between items-end pr-2"} >
                            <FlipCard
                                front={cardFaces('mobile')[playingCard as string]}
                                back={ cardFaces('mobile').cardback}
                                height={cardHeight}
                                width={cardWidth}
                                timing={(index + 1) * 200 }
                            />
                            <div className="lg:grid lg:place-items-end pl-2">
                                <Link key={path} to={pathTo} 
                                className={`${goldText} font-bold font-roboto left-0 mb-0`} 
                                >
                                    {linkName.charAt(0).toLocaleUpperCase().concat(linkName.slice(1, linkName.length))}
                                </Link>
                                <div className={`${underlineAnimation} bottom-0`} ></div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export { NavLinks, MobileNavLinks }