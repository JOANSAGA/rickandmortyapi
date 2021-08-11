module.exports = {
    purge: [
        './resources/**/*.blade.php',
        './resources/**/*.js',
        './resources/**/*.vue',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                primary: '#11555F',
                secondary: '#34C759',
                action: '#081F32',
                grayBase: '#E0E0E0',
                blakBase: '#313131',
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
