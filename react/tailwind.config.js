import {nextui} from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {},
    },
    safelist: ['bg-[#FFA500]', 'text-[#FFA500]'],
    darkMode: "class",
    plugins: [nextui()],
}