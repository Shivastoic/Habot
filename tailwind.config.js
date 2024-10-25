/** @type {import('tailwindcss').Config} */
module.exports = {

    content: [

		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",

    ],
    theme: {

		extend: {

			colors: {

				dark_blue: "#123557",

			},
			fontFamily: {

				geist_sans: ['var(--font-geist-sans)', 'sans-serif'],
        		geist_mono: ['var(--font-geist-mono)', 'sans-serif'],
				
			},

		},

    },
    plugins: [],

};
