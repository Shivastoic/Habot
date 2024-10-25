// IMPORT CONTAINER
import Container from "@/app/components/container"

// IMPORT COMPONENTS
import HowItWorksCard from "@/app/home-sections/how-it-works/how-it-works-card/index"

// HARDCODED DATA
const data = {

    title: "How it works?",
    subtitle: "Buyers post their needs and review top suppliers, while suppliers complete profiles, connect with potential buyers, and build successful business relationships, sharing valuable feedback.",


}

// CARD DATA
const card_data = [

    {

        src: "/icons/how-it-works/role.png",
        title: "Select Your Role and Sign Up",

    },
    {

        src: "/icons/how-it-works/buyers.png",
        title: "Buyers Post Your Requirements",

    },
    {

        src: "/icons/how-it-works/review.png",
        title: " Review, Select, and Contact the Best Suppliers",

    },
    {

        src: "/icons/how-it-works/supplier.png",
        title: " Suppliers Complete your profile and get notified for opportunities",

    },
    {

        src: "/icons/how-it-works/contact.png",
        title: "Contact to Buyers and Share your Quote for the service",

    },
    {

        src: "/icons/how-it-works/parties.png",
        title: "Both the Parties can Connect and Make Business Leave a Feedback",

    },

]

// HOPW IT WORKS SECTION
export default function HowItWorks() {

    return (

        <section className="py-16 md:py-24">
            <Container>
                <div className="flex flex-col gap-8">
                    <div className="space-y-4 lg:px-32">
                        <h2 className="text-3xl md:text-4xl text-center font-bold">{ data.title }</h2>
                        <p className="text-center">{ data.subtitle }</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3">
                        {

                            card_data.map( ( data, index ) => {

                                const bg_color = index % 2 == 0 ? "bg-sky-200/45" : "bg-white";
                                
                                return (

                                    <HowItWorksCard 
                                        key={ index }
                                        src={ data.src }
                                        title={ data.title }
                                        bg_color={ bg_color }
                                    />

                                )

                            })

                        }
                    </div>
                </div>
            </Container>
        </section>

    )

}
