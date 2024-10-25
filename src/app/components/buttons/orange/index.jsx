export default function ButtonOrangeBackground({ children }) {

    return (
    
        <button className="px-6 py-2 md:px-8 rounded-lg border-2 border-orange-500 bg-orange-500 text-sm text-white font-bold hover:bg-white hover:text-orange-500 duration-200">
            { children }
        </button>

    )

}
