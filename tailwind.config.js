const plugin = require('tailwindcss/plugin')

module.exports = {
    mode: 'jit',
    darkMode: 'class',
    theme: {
        fontFamily: {
            display: ['Eugusto', 'serif'],
            sans: ['Poppins']
        },
        scale: {
            '0': '0',
            '25': '.25',
            '50': '.5',
            '75': '.75',
            '90': '.9',
            '95': '.95',
            '100': '1',
            '105': '1.05',
            '110': '1.1',
            '115': '1.15',
            '125': '1.25',
            '150': '1.5',
            '200': '2',
        },
        extend: {
            backgroundColor: {
                primary: '#171716',
                primaryColor: '#f5f1e6'
            },
            colors: {
                primary: '#f5f1e6',
                text: '#171716',
                hover: '#293B2F'
            },
            height: {
                lg: '320px',
                xl: '440px'
            },
            boxShadow: {
                'shadow-sm': '0 1px 2px 0 rgba(0, 0, 0, 0.15)',
                shadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.15) ',
                'shadow-md': '0 4px 6px -1px rgba(0, 0, 0, 0.2), 0 2px 4px -1px rgba(0, 0, 0, 0.15) ',
                'shadow-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.25), 0 4px 6px -2px rgba(0, 0, 0, 0.2) ',
                'shadow-xl': '0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.15) ',
                'shadow-2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25) ',
                'shadow-inner': ''
            },
            fontSize: {
                'base': '0.9rem'
            }
        },
        container: {
            center: true,
            padding: '2rem'
        }
    },
    plugins: [
        plugin(function({
            addUtilities
        }) {
            addUtilities({
                '.text-border-3': {
                    textShadow: '-3px 3px 0 white, 3px 3px 0 white, 3px -3px 0 white, -3px -3px 0 white'
                }
            })
        }),
    ]
}