// IMPORT NEXT COMPONENT
import Image from "next/image"

// HOW IT WORKS CARD
export default function HowItWorksCard ({ src, title, bg_color }) {

    return (

        <div className={`flex flex-col py-16 px-16 items-center justify-center gap-6 ${ bg_color }`}>
            <Image 
                alt="icon"
                src={ src }
                width={ 200 }
                height={ 200 }
                className="w-16 md:w-20"
            />
            <p className="text-center font-medium">{ title }</p>
        </div>

    )

}
