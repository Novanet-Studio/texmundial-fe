module.exports = {
  siteMetadata: {
    title: `Texmundial - Distribuidores de telas para trajes de baño.`,
    description: `Somos una empresa con más de 27 años en el mercado, conocidos por la excelente calidad de nuestras telas.`,
    author: `@novanetstudio`,
    image: `http://gruponovanet.com.ve/misc/tm-site-thumb.jpg`,
    type: "website",
    siteUrl: "https://texmundial.com",
    titleTemplate: " Texmundial",
    twitterUsername: "@novanetstudio",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-smoothscroll`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-sitemap`,
    // App images
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    // MD Productos e imágenes
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `productos`,
        path: `${__dirname}/src/pages/productos/items`,
      },
    },
    // MD Articulos e imágenes
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/src/pages/blog/articulos`,
      },
    },

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Texmundial`,
        short_name: `catalog-starter`,
        start_url: `/`,
        background_color: `#171880`,
        theme_color: `#171880`,
        display: `minimal-ui`,
        icon: `src/assets/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [],
      },
    },
    {
      resolve: "gatsby-plugin-sass",
      otions: {
        useResolveUrlLoader: true,
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaultQuality: 100,
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-MRGWXBCDS6", // Google Analytics / GA        
        ],
        gtagConfig: {
          optimize_id: "GTM-MWNPJDF",
          anonymize_ip: true,
          cookie_expires: 0,
        },
        pluginConfig: {
          head: true,        
        },
      },
    },
  ],
}
