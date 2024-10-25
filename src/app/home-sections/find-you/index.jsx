// IMPORT CONTAINER
import ButtonOrangeBackground from "@/app/components/buttons/orange";
import Container from "@/app/components/container";
import Link from "next/link";

// HARDCODED DATA
const data = {

    title: "Let Suppliers ",
    underline_title: "Find You",
    button_link: "/",
    button_text: "Get Verified",

}

// FIND YOU SECTION
export default function FindYou () {

    return (

        <section className="py-16 bg-sky-200/45">
            <Container>
                <div className="flex flex-col md:flex-row gap-8 items-center justify-between lg:px-32">
                    <h2 className="text-3xl md:text-4xl font-semibold">
                        { data.title }
                        <span className="underline underline-offset-4 decoration-orange-500">{ data.underline_title }</span>
                    </h2>
                    <Link href={ data.button_link }>
                        <ButtonOrangeBackground>{ data.button_text }</ButtonOrangeBackground>
                    </Link>
                </div>
            </Container>
        </section>

    )

}
