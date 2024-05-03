import React from "react"
import Navbar from "../components/Navbar"
import Hand from "../components/DealAnimation"

const Merch: React.FC = ({ }) => {

    return (
        <div id="merch_content" className="h-[80vh]">
            <Navbar />
            <Hand />
        </div>
    )
}

export default Merch