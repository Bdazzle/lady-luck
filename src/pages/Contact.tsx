import React from "react"
import Navbar from "../components/Navbar"
import { goldText } from "../constants"

const Contact: React.FC = ({ }) => {

    return (
        <div>
            <Navbar />
            <h1 className={`${goldText} text-center text-4xl my-4`}>
                Contact
            </h1>
            <div className="text-white flex flex-col"
            itemScope itemType="http://schema.org/ContactPoint">
                <p className="px-4 text-2xl">We would love to hear from you! Please reach out to us either via phone, text, or email to discuss your unique party needs.</p>
                <a href="tel:5085605649" itemProp="telephone"
                    className={`underline text-blue-600 text-center my-2 text-2xl`}
                >508-560-5649</a>
                <a href="mailto:soikkeli@vineyard.net?Subject=" target="_blank" rel="noreferrer" itemProp="email"
                    className={`underline text-blue-600 text-center mb-2 text-2xl`}>
                    mvcasinoco@gmail.com
                </a>
                <p className="px-4 text-2xl">Parties must be booked at least 2 weeks in advance, to accommodate scheduling. However, smaller parties of 1 or 2 tables can be booked last minute.</p>
                <br></br>
                <p className="px-4 text-2xl">Our rates are given on an individual basis- based upon the number of tables needed for the party, and the length of the event (typical events are 4 hours).</p>
                <br></br>
                <p className="px-4 text-2xl">Our prize packages are included for parties with 3 tables or more, but can be added to any party.</p>
                <br></br>
                <p className={`${goldText} text-center text-2xl px-2`}>We look forward to hearing from you!</p>
            </div>
        </div>
    )
}

export default Contact