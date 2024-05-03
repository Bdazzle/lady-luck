import React from "react"
import Navbar from "../components/Navbar"
import Hand from "../components/DealAnimation"

const Gallery : React.FC = ({}) =>{

    return(
        <div id="gallery_content" className="h-[80vh] ">
            <Navbar />
            <Hand />
        </div>
    )
}

export default Gallery