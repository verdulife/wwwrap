import { fontFamily } from "tailwindcss/defaultTheme";
import autoprefixer from "autoprefixer";

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			sans: [
				'Sora Variable',
				fontFamily.sans
			]
		},
		extend: {},
	},
	plugins: [
		autoprefixer()
	],
}
