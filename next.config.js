//const dotEnvResult = require('dotenv').config()

const withCSS = require('@zeit/next-css');
const withImages = require('next-images');
const withSass = require('@zeit/next-sass');

//const isProd = process.env.NODE_ENV === 'production';


module.exports = withCSS(withImages(withSass(
    //assetPrefix: isProd ? 'https://cdn.mydomain.com' : 'http://localhost:3000/',
)))
