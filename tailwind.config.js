/** @type {import('tailwindcss').Config} */
const _ = require('lodash')

export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	mode: "jit",
	theme: {
		container: {
			center: true,
		},
		width: (theme) => ({
			..._.reduce(
				new Array(24),
				(memo, item, index) => {
					const newIndex = index + 1;
					const percent = (newIndex * 100) / 24;
					memo[`${newIndex}/24`] = `${percent}%`;
					return memo;
				},
				{}
			),
			0: "0",
			auto: "auto",
			full: "100%",
			screen: "100vw",
			min: "min-content",
			max: "max-content",
			...theme("spacing"),
		}),
	},
	plugins: [],
};
