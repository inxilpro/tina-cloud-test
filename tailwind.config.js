const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    mode: "jit",
    purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    theme: {
        fontFamily: {
            sans: [
                '"Helvetica Neue"',
                'Helvetica',
                'ui-sans-serif',
                'system-ui',
                '-apple-system',
                'BlinkMacSystemFont',
                '"Segoe UI"',
                'Roboto',
                'Arial',
                '"Noto Sans"',
                'sans-serif',
                '"Apple Color Emoji"',
                '"Segoe UI Emoji"',
                '"Segoe UI Symbol"',
                '"Noto Color Emoji"',
            ],
        },
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
    
            black: colors.black,
            white: colors.white,
            gray: colors.warmGray,
            red: colors.red,
            blue: colors.blue,
            indigo: colors.indigo,
            purple: colors.violet,
            pink: colors.pink,
            
            // See: https://www.tailwindshades.com/
            'green': {
                DEFAULT: '#adbc2e',
                '50': '#f3f6da',
                '100': '#ecf1c5',
                '200': '#dfe79c',
                '300': '#d2dd73',
                '400': '#c4d34a',
                '500': '#adbc2e',
                '600': '#879324',
                '700': '#626a1a',
                '800': '#3c4110',
                '900': '#161806'
            },
    
            'orange': {
                DEFAULT: '#ED9411',
                '50': '#FDF4E6',
                '100': '#FCE9CE',
                '200': '#F8D49F',
                '300': '#F5BF6F',
                '400': '#F1A940',
                '500': '#ED9411',
                '600': '#BD760E',
                '700': '#8E590A',
                '800': '#5E3B07',
                '900': '#2F1D03'
            },
    
            'yellow': {
                DEFAULT: '#FEBF00',
                '50': '#FFF8E5',
                '100': '#FFF2CB',
                '200': '#FFE598',
                '300': '#FFD965',
                '400': '#FFCC32',
                '500': '#FEBF00',
                '600': '#CB9900',
                '700': '#987200',
                '800': '#654C00',
                '900': '#322600'
            },
    
            'brown': {
                DEFAULT: '#68594B',
                '50': '#D4CCC4',
                '100': '#CABFB5',
                '200': '#B4A698',
                '300': '#9F8C7A',
                '400': '#867260',
                '500': '#68594B',
                '600': '#4A4036',
                '700': '#2D2620',
                '800': '#0F0D0B',
                '900': '#000000'
            },
        },
        container: {
            center: true,
        },
    },
    plugins: [
        require("@tailwindcss/typography"),
        require("@tailwindcss/forms"),
        require("@tailwindcss/aspect-ratio"),
    ],
};
