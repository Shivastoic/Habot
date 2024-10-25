// IMPORT HOME SECTIONS
import Hero from "@/app/home-sections/hero/index"
import ReadyToDive from "@/app/home-sections/ready-to-dive";
import BuyerSupplier from "@/app/home-sections/buyer-supplier";
import FindYou from "@/app/home-sections/find-you";
import HowItWorks from "@/app/home-sections/how-it-works";

// HOME PAGE
export default function Home() {

    return (

		<>
			<Hero />
			<ReadyToDive />
			<BuyerSupplier />
			<FindYou />
			<HowItWorks />
		</>

    );

}
