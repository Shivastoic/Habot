// IMPORT NEXT COMPONENTS
import Image from "next/image"
import Link from "next/link"

// IMPORT HEADER COMPONENTS
import DesktopNavigation from "@/app/components/header/desktop-navigation/index"
import MobileNavigation from "./mobile-navigation"

// HARDCODED DATA
const data = {

    logo_src: "/logos/habot.png",
    logo_alt: "logo",
    logo_link: "/"

}

// NAVIGATION LINKS DATA
const nav_links = [

    {

        link_name: "Find Suppliers",
        link: "/",
        sub_links: [],

    },
    {

        link_name: "Find Service tags",
        link: "/",
        sub_links: [

            {

                link_name: "Backlink creation",
                link: "/",

            },
            {

                link_name: "Image/Video creation",
                link: "/",

            },
            {

                link_name: "Content creation",
                link: "/",

            },

        ],

    },

]

// NAVIGATION BUTTON DATA
const button_data = {

    button_text: "Login / Sign Up",
    button_link: "/",

}

// HEADER COMPONENT
export default function Header(){

    return (

        <header className="p-4 xl:px-16">
            <nav className="flex items-center justify-between">
                {/* LOGO */}
                <Link href={ data.logo_link }>
                    <Image
                        alt={ data.logo_alt }
                        src={ data.logo_src }
                        width={ 400 }
                        height={ 100 }
                        className="w-32 lg:w-36 h-full"
                    />
                </Link>

                {/* NAVIGATION */}
                <DesktopNavigation 
                    nav_links={ nav_links }
                    button_data={ button_data }
                />
                <MobileNavigation 
                    nav_links={ nav_links }
                    button_data={ button_data }
                />
            </nav>
        </header>

    )

}
