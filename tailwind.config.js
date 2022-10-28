const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
    content: ["*.hbs", "./partials/**/*.hbs"],
    theme: {
        extend: {
            colors: {
                graySecondary: "#A2A2A6",
                grayPrimary: {
                    DEFAULT: "#28282F",
                    light: "#2B2B2E",
                    dark: "#0C0C0E",
                },
                primary: "#61F0A9",
                myblue: "#6161F0",
                mypink: "#F061A8",
                myyellow: "#F0F061",
            },
            fontFamily: {
                body: [
                    "Inter",
                    "ui-sans-serif",
                    "system-ui",
                    "-apple-system",
                    "system-ui",
                    "Segoe UI",
                    "Roboto",
                    "Helvetica Neue",
                    "Arial",
                    "Noto Sans",
                    "sans-serif",
                    "Apple Color Emoji",
                    "Segoe UI Emoji",
                    "Segoe UI Symbol",
                    "Noto Color Emoji",
                ],
                sans: [
                    "Inter",
                    "ui-sans-serif",
                    "system-ui",
                    "-apple-system",
                    "system-ui",
                    "Segoe UI",
                    "Roboto",
                    "Helvetica Neue",
                    "Arial",
                    "Noto Sans",
                    "sans-serif",
                    "Apple Color Emoji",
                    "Segoe UI Emoji",
                    "Segoe UI Symbol",
                    "Noto Color Emoji",
                ],
                text: [
                    "Inter",
                    "sans-serif",
                    "Apple Color Emoji",
                    "Segoe UI Emoji",
                    "Segoe UI Symbol",
                ],
                header: ["Inter", "sans-serif", "cursive"],
                subheader: ["Inter", "serif"],
                "text-old": [
                    "Prompt",
                    "serif",
                    "Apple Color Emoji",
                    "Segoe UI Emoji",
                    "Segoe UI Symbol",
                ],
                "header-old": ["Mukta", "cursive"],
                "subheader-old": ['"Libre Franklin"', "serif"],
            },
            screens: {
                xs: "475px",
                ...defaultTheme.screens,
            },
        },
    },
    variants: {
        extend: {
            borderWidth: ["hover", "focus"],
        },
    },
    plugins: [require("@tailwindcss/typography")],
};
