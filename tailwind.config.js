/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,ts}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#1b87d3",
            }
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
    ],
}
