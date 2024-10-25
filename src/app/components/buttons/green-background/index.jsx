export default function ButtonGreenBackground({ children }) {

    return (
    
        <button className="px-6 py-2 md:px-8 md:py-3 rounded-lg border-2 border-green-700 bg-green-700 text-sm text-white font-bold hover:bg-white hover:text-green-700 duration-200">
            { children }
        </button>

    )

}
