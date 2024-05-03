import { goldText } from "../constants"

const C2Cbutton: React.FC = () => {

    return (
        <div id="c2c_wrapper"
            className="w-1/3 max-w-[140px] md:w-1/4 flex justify-center items-center border-4 border-[#BF953F] rounded-full h-[100px]"
        >
            <a className={`${goldText} font-bold text-center text-3xl`}
                href="tel:5085605649"
            >
                Click to Call
            </a>
        </div>
    )
}

export default C2Cbutton