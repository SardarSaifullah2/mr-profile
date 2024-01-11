/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
            hostname : "*.googleusercontent.com"
        },
        {
            hostname : "*.githubusercontent.com"
        },
        {
            hostname : "*.amazonaws.com"
        } ,
        {
            hostname : "*.freepik.com"
        }
    ]
    }
}

module.exports = nextConfig
