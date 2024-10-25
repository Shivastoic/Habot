// IMPORT CONTAINER
import Container from "@/app/components/container"
import BuyerSupplierNav from "./navigation"

// DATA
const buyerList = [

    "Post your requirements.", 
    "Sit back for multiple suppliers to contact you.", 
    "Choose among the suppliers based on the ratings and reviews.",

]
const supplierList = [
    
    "Supplier Item 1", 
    "Supplier Item 2", 
    "Supplier Item 3",

]

// BUYER SUPPLIER SECTION
export default function BuyerSupplier(){

    return (

        <section className="pb-16 md:pb-24">
            <Container>
                <div className="flex flex-col md:flex-row gap-16 px-10 md:px-14 py-16 md:py-24 bg-dark_blue rounded-md">
                    <div className="md:w-3/5">
                        <iframe
                            className="aspect-video w-full h-full rounded-lg" 
                            src="https://www.youtube.com/embed/i8tgRHXx4oQ" 
                            title="HABOT- How is works" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            referrerPolicy="strict-origin-when-cross-origin" 
                            allowFullScreen
                        >
                        </iframe>
                    </div>
                    <div className="md:w-2/5">
                        <BuyerSupplierNav
                            buyer_list={ buyerList }
                            supplier_list={ supplierList }
                        />
                    </div>
                </div>
            </Container>
        </section>

    )

}
