// IMPORT REACT ICONS
import Link from "next/link"
import { FaLinkedinIn, FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa"

// HARDCODED DATA
const links = [

    {

        icon: <FaLinkedinIn />,
        link: "/",

    },
    {

        icon: <FaTwitter />,
        link: "/",

    },
    {

        icon: <FaFacebookF />,
        link: "/",

    },
    {

        icon: <FaInstagram />,
        link: "/",

    },

]

export default function SocialLinks(){

    return (

        <div className="flex items-center gap-4">
            {

                links.map( ( data, index ) => (

                    <Link key={ index } href={ data.link }>
                        <div className="size-10 rounded-full p-2 border border-white/15 flex items-center justify-center group hover:bg-white duration-200">
                            <span className="text-lg text-white group-hover:text-black duration-200">{ data.icon }</span>
                        </div>
                    </Link>

                ))

            }
        </div>

    )

}
