// IMPORT NEXT LOCAL FONT
import localFont from "next/font/local";

// IMPORT GLOBAL CSS
import "./globals.css";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";

// GEISTSANS FONT
const geistSans = localFont({

	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",

});

// GEISMONO FONT
const geistMono = localFont({

	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",

});

// META DATA FOR SEO
export const metadata = {

	title: "Habot by Shiva Pandey",
	description: "Habot web app created by Shiva Pandey for UI/UX Role.",
	keywords: "Habot, react, next, responsive",
    authors: { name: "Shiva Pandey" },
    openGraph: {

        title: "Habot by Shiva Pandey",
        description: "Habot web app created by Shiva Pandey for UI/UX Role.",
        url: "url",
        images: [
            {
                url: "url/og-image.jpg",
                width: 800,
                height: 600,
                alt: "Og Image Alt",
            },
        ],

    },
    twitter: {

        card: "summary_large_image",
        title: "Habot by Shiva Pandey",
        description: "Habot web app created by Shiva Pandey for UI/UX Role.",
        images: ["url/twitter-image.jpg"],

    },
    icons: {

        icon: [
            { url: "/favicon.svg", type: "image/svg+xml" },
            { url: "/favicon.png", type: "image/png" },
        ],

    },

};

export default function RootLayout({ children }) {

	return (

		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                <Header />
				<main>{ children }</main>
                <Footer />
			</body>
		</html>

	);

}
