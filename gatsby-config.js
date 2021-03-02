module.exports = {
  siteMetadata: {
    title: `Brian Stefanovich`,
    author: {
      name: `Brian Stefanovich`,
      summary: `I'm a full stack developer, here you can find some of my work`,
    },
    description: `Brian Stefanovich is a full stack developer that design and develop web based business solutions`,
    social: {
      twitter: `bstefanovich`,
      github: `BrianStefanovich`,
      instagram: `BrianStefanovich`,
      linkedin: `BrianSefanovich`,
      telegram: `@BrianStefanovich`,
      email: `email@brianstefanovich.com`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-katex`,
            options: {
              strict: `ignore`,
            },
          },
          {
            resolve: "gatsby-remark-code-buttons",
            options: {
              buttonText: "Copy",
              tooltipText: `Copy to clipboard`,
              toasterText: "Copied to clipboard",
              toasterDuration: 3000,
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Brian Stefanovich`,
        short_name: `Brian Stefanovich`,
        start_url: `/`,
        background_color: `#262626`,
        theme_color: `#0F62FE`,
        display: `minimal-ui`,
        icon: `content/assets/brian-icon.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
