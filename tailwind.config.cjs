/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				slate: generateScale('slate'),
				red: generateScale('red'),
				indigo: generateScale('indigo'),
				gray: generateScale('gray')
			}
		}
	},
	plugins: []
};

function generateScale(name) {
	let scale = Array.from({ length: 12 }, (_, i) => {
		let id = i + 1;
		return [
			[id, `var(--${name}${id})`],
			[`a${id}`, `var(--${name}-${id})`]
		];
	}).flat();

	return Object.fromEntries(scale);
}
