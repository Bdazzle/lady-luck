import { Link, useLocation } from "react-router-dom";
import FlipCard from "./FlipCard";
import { goldText, routeList, underlineAnimation } from "../constants";
import cardFaces from "../SVGs/cardFaces"

const cards = ['ace', 'king', 'queen', 'jack', 'aceOfHearts']

const NavLinks: React.FC = ({ }) => {
    const currentRoute = useLocation()
   
    return (
        <div id="linksContainer"
            className="flex lg:flex-row lg:justify-around lg:w-full lg:h-24 lg:items-end lg:static lg:py-0 
           
                    flex-col absolute ml-0 w-1/3 bg-darkPurple py-2 lg:bg-black rounded animate-leftSlide lg:animate-none"
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
                            {/* <div className={`w-[${cardWidth}] h-[${cardHeight}]`}> */}
                            <FlipCard
                                front={cardFaces[playingCard as string]}
                                back={ window.innerWidth >=768 ? <div className={`bg-black`} style={{
                                    width: cardWidth,
                                    height: cardHeight
                                }}></div> : cardFaces.cardback}
                                height={cardHeight}
                                width={cardWidth}
                                timing={(index + 1) * 200 }
                            />
                            {/* </div> */}
                            <div className="lg:grid lg:place-items-end pl-2">
                                <Link key={path} to={pathTo} className={`${goldText} font-roboto left-0 mb-0 `}>
                                    {linkName.charAt(0).toLocaleUpperCase().concat(linkName.slice(1, linkName.length))}
                                </Link>
                                <div className={`${underlineAnimation} bottom-0`} ></div>
                            </div>
                        </div>
                    )
                    // }
                })
            }
        </div>
    )
}

export default NavLinks