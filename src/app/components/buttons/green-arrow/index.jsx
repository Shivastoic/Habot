// IMPORT REACT ICONS
import { FaArrowRightLong } from "react-icons/fa6"

// BUTTON GREEN WITH ARROW
export default function ButtonGreenArrow({ children }) {

    return (
    
        <button className="flex items-center gap-4 px-6 py-2 md:px-8 md:py-3 rounded-lg border-2 border-green-700 bg-green-700 text-sm text-white font-bold hover:bg-white hover:text-green-700 duration-200">
            { children }
            <span className="text-lg"><FaArrowRightLong /></span>
        </button>

    )

}
