import React from "react";
import { goldText } from "../constants";

const Footer: React.FC = () => {

    return (
        <div itemScope itemType="http://schema.org/ContactPoint"
            className="flex flex-col lg:flex-row static justify-evenly w-full pb-2 z-10 bg-black">
            <div itemProp="name"
                className={`${goldText} font-bold font-cursive text-4xl text-center h-12 w-full lg:text-6xl lg:h-20 lg:w-[250px]`} >
                Lady Luck
            </div>
            <div id="contact_footer"
                className="flex flex-col lg:flex-row justify-around items-center lg:w-[50%]"
            >
                <a href="tel:5085605649" itemProp="telephone"
                    className={`underline text-blue-600 text-3xl`}
                >508-560-5649</a>
                <div>
                    <a href="mailto:soikkeli@vineyard.net?Subject=" target="_blank" rel="noreferrer" itemProp="email"
                    className={`underline text-blue-600 text-3xl`}>
                        mvcasinoco@gmail.com
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer