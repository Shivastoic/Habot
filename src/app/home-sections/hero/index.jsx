// IMPORT CONTAINER
import Container from "@/app/components/container"
import SearchComponent from "@/app/home-sections/hero/search/index"
import Link from "next/link"

// HARDCODED DATA
const data = {

    title: "Are You a Supplier?",
    subtitle: "Explore Matching Opportunities.",
    buyer_question: "Are you a buyer ?",
    buyer_link_text: "Click here if you are looking to post a requirement",
    buyer_link: "/",

}

export default function Hero(){

    return (

        <section className="relative bg-[url('/images/hero/hero-bg.jpg')] bg-no-repeat bg-cover bg-center">
            {/* OVERLAY */}
            <div className="absolute top-0 left-0 w-full h-full bg-dark_blue/80"></div>

            {/* MAIN CONTENT */}
            <Container>
                <div className="flex items-center justify-center py-16 md:py-28">
                    <div className="flex flex-col gap-10 max-w-screen-lg z-10">
                        {/* TITLES */}
                        <div className="space-y-8">
                            <h1 className="text-3xl md:text-[55px] text-center text-white font-bold">{ data.title }</h1>
                            <h2 className="text-3xl md:text-[55px] text-center text-white">{ data.subtitle }</h2>
                        </div>

                        {/* SEARCH COMPONENT */}
                        <SearchComponent />

                        {/* BOTTOM LINK */}
                        <div className="flex flex-col md:flex-row items-center justify-center gap-2">
                            <p className="text-white font-bold">{ data.buyer_question }</p>
                            <Link href={ data.buyer_link }>
                                <p className="text-white underline underline-offset-2">{ data.buyer_link_text }</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>
        </section>

    )

}
