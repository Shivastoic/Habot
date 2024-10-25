export default function ButtonGreenOutline({ children }) {

    return (

        <button className="px-6 py-2 md:px-8 md:py-3 rounded-lg border-2 border-green-600 text-sm text-green-600 font-bold hover:bg-green-600 hover:text-white duration-200">
            { children }
        </button>

    )

}
