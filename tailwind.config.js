import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            keyframes: {
                scan: {
                    from: { transform: 'translateY(-3rem)' },
                    to: { transform: 'translateY(100dvh)' },
                },
                orbit1: {
                    '0%': { transform: 'translate(-10dvw, 0dvh)' },
                    '33%': { transform: 'translate(90dvw, 10dvh)' },
                    '66%': { transform: 'translate(50dvw, 80dvh)' },
                    '100%': { transform: 'translate(0dvw, -10dvh)' },
                },
                orbit2: {
                    '0%': { transform: 'translate(110dvw, 100dvh)' },
                    '25%': { transform: 'translate(25dvw, -100dvh)' },
                    '50%': { transform: 'translate(0dvw, 50dvh)' },
                    '75%': { transform: 'translate(10dvw, 20dvh)' },
                    '100%': { transform: 'translate(100dvw, 100dvh)' },
                },
            },
        },
    },

    plugins: [forms],
};
