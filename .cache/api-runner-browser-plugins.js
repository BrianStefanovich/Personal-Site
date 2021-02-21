module.exports = [{
      plugin: require('../node_modules/gatsby-remark-code-buttons/gatsby-browser.js'),
      options: {"plugins":[],"tooltipText":"Copy to clipboard","toasterText":"Copied to clipboard","toasterDuration":5000},
    },{
      plugin: require('../node_modules/gatsby-remark-images/gatsby-browser.js'),
      options: {"plugins":[],"maxWidth":630,"linkImagesToOriginal":true,"showCaptions":false,"markdownCaptions":false,"sizeByPixelDensity":false,"backgroundColor":"white","quality":50,"withWebp":false,"tracedSVG":false,"loading":"lazy","disableBgImageOnAlpha":false,"disableBgImage":false},
    },{
      plugin: require('../node_modules/gatsby-plugin-google-analytics/gatsby-browser.js'),
      options: {"plugins":[],"head":false,"anonymize":false,"respectDNT":false,"exclude":[],"pageTransitionDelay":0},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"Brian Stefanovich","short_name":"Brian Stefanovich","start_url":"/","background_color":"#262626","theme_color":"#0F62FE","display":"minimal-ui","icon":"content/assets/brian-icon.png","legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":"571e53f1c865ec7014a8ca52338f4f72"},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
