// IMPORT NEXT COMPONENTS
import Image from "next/image"
import Link from "next/link"

// IMPORT CONTAINER
import Container from "@/app/components/container/index"
import SocialLinks from "@/app/components/footer/social-links/index"

// HARDCODED DATA
const data = {

    logo_src: "/logos/habot-white.png",
    logo_alt: "logo",

}

// FOOTER LINKS DATA
const footer_links = [

    {

        title: "Company",
        links: [

            {

                title: "About",
                link: "/",

            },
            {

                title: "FAQ",
                link: "/",

            },

        ]

    },
    {

        title: "Terms",
        links: [

            {

                title: "Data privacy",
                link: "/",

            },
            {

                title: "Terms",
                link: "/",

            },
            {

                title: "Accessibility",
                link: "/",

            },

        ]

    },
    {

        title: "Related",
        links: [

            {

                title: "Find Buyer",
                link: "/",

            },
            {

                title: "Feedback",
                link: "/",

            },

        ]

    },

]

export default function Footer(){

    return (

        <footer className="bg-dark_blue py-14">
            <Container>
                <div className="flex flex-col md:flex-row gap-14 md:items-center justify-between border-y-2 border-white/15 py-6">
                    <div className="flex flex-col md:flex-row gap-8 md:gap-20 md:items-center">
                        {/* FOOTER LOGO */}
                        <Image 
                            alt={ data.logo_alt }
                            src={ data.logo_src }
                            width={ 400 }
                            height={ 100 }
                            className="max-w-60 h-full"
                        />

                        {/* FOOTER LINKS */}
                        <div className="flex flex-wrap gap-8 md:gap-14">
                            {

                                footer_links.map( ( data, index ) => (

                                    <div key={ index } className="flex flex-col gap-3">
                                        <h3 className="text-white font-bold">{ data.title }</h3>
                                        <ul className="flex flex-col gap-1">
                                            {

                                                data.links.map( ( links, subIndex ) => (

                                                    <Link key={ subIndex } href={ links.link }>
                                                        <li className="text-white">
                                                            { links.title }
                                                        </li>
                                                    </Link>

                                                ))

                                            }
                                        </ul>
                                        
                                    </div>

                                ))

                            }
                        </div>
                    </div>
                    {/* SOCIAL LINKS */}
                    <SocialLinks />
                </div>
            </Container>
        </footer>

    )

}
