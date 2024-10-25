// IMPORT CONTAINER
import ButtonGreenArrow from "@/app/components/buttons/green-arrow";
import Container from "@/app/components/container";
import Link from "next/link";

// HARDCODED DATA
const data = {

    title: "Ready to dive into HABOT?",
    description: "Signing up with HABOT opens the door to a world of new opportunities and potential for business growth. Gain access to a vibrant community of like-minded individuals, unlock valuable resources, and take the first step towards realizing your entrepreneurial dreams.",
    button_text: "Sign up Today !",
    button_link: "/",

}

const location_cards_data = [

    "Abu Dhabi",
    "Dubai",
    "Sharjah & Ajman",
    "Fujairah",
    "Ras AI Khaimah",
    "Umm AI Quwain",

]

// READY TO DIVE SECTION
export default function ReadyToDive(){

    return (

        <section className="py-16 md:py-24">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-36">
                    {/* FIRST SECTION  */}
                    <div className="flex flex-col gap-8 justify-between">
                        <h2 className="text-3xl md:text-4xl font-bold">{ data.title }</h2>
                        <p className="">{ data.description }</p>
                        <Link href={ data.button_link }>
                            <ButtonGreenArrow>{ data.button_text }</ButtonGreenArrow>
                        </Link>
                    </div>

                    {/* SECOND SECTION */}
                    <div className="grid grid-cols-2 gap-4">
                        {

                            location_cards_data.map( ( data, index ) => (

                                <div key={ index } className="flex items-center justify-center px-6 py-3 rounded-md border-2 border-orange-500">
                                    <p className="text-lg font-medium">{ data }</p>
                                </div>

                            ))

                        }
                    </div>
                </div>
            </Container>
        </section>

    )

}
