export default function Container({ children }) {

    return (

        <div className="w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto max-sm:px-4 h-full">
            { children }
        </div>

    )

}
