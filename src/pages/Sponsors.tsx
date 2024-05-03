import React from "react"
import Navbar from "../components/Navbar"
import Hand from "../components/DealAnimation"

const Sponsors : React.FC = ({}) =>{

    return(
        <div id="sponsors_content" className="h-[80vh]">
            <Navbar />
            <Hand />
        </div>
    )
}

export default Sponsors