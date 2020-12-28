var plugins = [{
      plugin: require('/home/kushal/Desktop/Portfolio/netlify/Kushal-kothari.github.io/node_modules/gatsby-plugin-google-analytics/gatsby-ssr'),
      options: {"plugins":[],"trackingId":"UA-186061894-1","head":true,"anonymize":true,"respectDNT":false,"exclude":[],"pageTransitionDelay":0},
    },{
      plugin: require('/home/kushal/Desktop/Portfolio/netlify/Kushal-kothari.github.io/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/home/kushal/Desktop/Portfolio/netlify/Kushal-kothari.github.io/node_modules/gatsby-plugin-feed/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/home/kushal/Desktop/Portfolio/netlify/Kushal-kothari.github.io/node_modules/gatsby-plugin-google-analytics/gatsby-ssr'),
      options: {"plugins":[],"trackingId":"UA-54210715-4","head":false,"anonymize":false,"respectDNT":false,"exclude":[],"pageTransitionDelay":0},
    },{
      plugin: require('/home/kushal/Desktop/Portfolio/netlify/Kushal-kothari.github.io/node_modules/gatsby-plugin-manifest/gatsby-ssr'),
      options: {"plugins":[],"name":"ryan-fitzgerald","short_name":"rfitz","start_url":"/","background_color":"#3486eb","theme_color":"#3486eb","display":"minimal-ui","icon":"src/images/icon.png","cache_busting_mode":"query","include_favicon":true,"legacy":true,"theme_color_in_head":true,"cacheDigest":"09015564a48c8f17ac7f5114860062a1"},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
