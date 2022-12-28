/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                noise: "url('/noise.png')",
                hero: "url('/hero.jpg')",
            },
        },
    },
    plugins: [],
}
