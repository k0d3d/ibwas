module.exports = {
  siteMetadata: {
    title: `IBWAS Nigeria Limited`,
    siteUrl: `https://www.ibwasngltd.com`,
    description: `We serve many resellers, wood merchants and avid hobbyist with wooden parts and furniture. We are located in Lagos Nigeria. We sell HDF, MDF, Particle Board, Plywood and more.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-transformer-sharp`, 
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {

      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
        createLinkInHead: true
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `staticAssets`,
        path: `${__dirname}/static`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "WordPress",
        fieldName: "swapi",
        url: "https://www2.ibwasngltd.com/graphql",
      },
    },
    {
      resolve: `gatsby-plugin-styled-jsx`,
      options: {
        jsxPlugins: ["styled-jsx-plugin-sass"],
        optimizeForSpeed: true,
        sourceMaps: false,
        vendorPrefixes: true,     
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "IBWAS Nigeria Limited",
        short_name: "IBWASNGLTD.com",
        start_url: "/",
        background_color: "#1C24DA",
        theme_color: "#1C24DA",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        icon: "src/images/logo.png", // This path is relative to the root of the site.
        // An optional attribute which provides support for CORS check.
        // If you do not provide a crossOrigin option, it will skip CORS for manifest.
        // Any invalid keyword or empty string defaults to `anonymous`
        crossOrigin: `use-credentials`,
        // theme_color_in_head: false,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
