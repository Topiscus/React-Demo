const { plugins } = require('./postcss.config')

{import('tailwindcss').config}
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {},

    },
    plugins: [
        require('daisyui'),
    ],
}