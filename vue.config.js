module.exports = {
    // publicPath: './'
    publicPath: process.env.NODE_ENV === 'production'
        ? '/POS-System/'
        : '/',
        devServer: {
            https: true
        }
}