module.exports = {
    siteUrl: process.env.SITE_URL || 'https://lacefeeta.com',
    generateRobotsTxt: true,
    exclude: ['/server-sitemap.xml'],
    robotsTxtOptions: {
        additionalSitemaps: [
            'https://lacefeeta.com/server-sitemap.xml'
        ],
    },
}