import React from "react"
import Navbar from "../components/Navbar"
import { goldText } from "../constants"
import C2Cbutton from "../components/C2Cbutton"

const Contact: React.FC = ({ }) => {

    return (
        <div itemScope
            itemType="http://schema.org/ContactPage">
            <Navbar />
            <h1 className={`${goldText} text-center text-4xl my-4 mt-24 font-bold`}>
                Contact
            </h1>
            <div className="text-white flex flex-col items-center"
                itemScope itemType="http://schema.org/ContactPoint">
                <p className="text-2xl px-8 text-center">
                    We would love to hear from you! Please reach out to us either via phone, text, or email to discuss your unique party needs.
                </p>
                <div className="flex justify-center items-center bg-primaryPurple rounded-full w-[190px] my-2 border-2 border-[#BF953F]">
                    <a href="tel:5085605649" itemProp="telephone"
                        className={`${goldText} font-bold text-center my-2 text-2xl border-b-2 border-[#BF953F]`}
                    >508-560-5649</a>
                </div>
                <div className="flex justify-center items-center bg-primaryPurple rounded-full w-[300px] my-2 border-2 border-[#BF953F]">
                    <a href="mailto:mvcasinoco@gmail.com?Subject=" target="_blank" rel="noreferrer" itemProp="email"
                        className={`${goldText} font-bold text-center mb-2 text-2xl border-b-2 border-[#BF953F]`}>
                        mvcasinoco@gmail.com
                    </a>
                </div>
                <p className="text-2xl px-8 text-center">
                    Parties must be booked at least 2 weeks in advance, to accommodate scheduling. However, smaller parties of 1 or 2 tables can be booked last minute.
                </p>
                <br></br>
                <p className="text-2xl px-8 text-center">
                    Our rates are given on an individual basis- based upon the number of tables needed for the party, and the length of the event (typical events are 4 hours).
                </p>
                <br></br>
                <p className="text-2xl px-8 text-center">
                    Our prize packages are included for parties with 3 tables or more, but can be added to any party.
                </p>
                <br></br>
                <p className={`${goldText} text-center text-2xl px-2 mb-4 font-bold`}>
                    We look forward to hearing from you!
                </p>
                <C2Cbutton />
            </div>
        </div>
    )
}

export default Contact