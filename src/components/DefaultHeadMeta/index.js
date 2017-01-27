import React, { PropTypes } from "react"
import Helmet from "react-helmet"

import favicon from "./favicon.ico"
import favicon192x192 from "./favicon-192x192.png"

const DefaultHeadMeta = (props, { metadata: { pkg } }) => (
  <div hidden>
    <Helmet
      link={ [
        {
          "rel": "shortcut icon",
          "type": "image/png",
          "href": favicon,
        },
        {
          "rel": "icon",
          "type": "image/png",
          "href": favicon192x192,
          "sizes": "192x192",
        },
      ] }
      meta={ [
        { property: "keywords", content: pkg.keywords },
        { property: "description", content: pkg.description },
        {
          name: "generator", content: `${
          process.env.PHENOMIC_NAME } ${ process.env.PHENOMIC_VERSION }`,
        },
        { property: "og:site_name", content: pkg.name },
        { name: "twitter:site", content: `@${ pkg.twitter }` },
        ...props.meta ? props.meta : [],
      ] }
      script={ [
        { src: "https://cdn.polyfill.io/v2/polyfill.min.js" },
        ...props.scripts ? props.scripts : [],
      ] }
    />

    { /* meta viewport safari/chrome/edge */ }
    <Helmet
      meta={ [ {
        name: "viewport", content: "width=device-width, initial-scale=1",
      } ] }
    />
    <style>{ "@-ms-viewport { width: device-width; }" }</style>
    <Helmet
      script={ [{
        type: "text/javascript",
        "innerHTML": `{
        var cnzz_protocol = (("https:" == document.location.protocol) ? " https://" : " http://");document.write(unescape("%3Cscript src='" + cnzz_protocol + "s4.cnzz.com/z_stat.php%3Fid%3D1261171879%26show%3Dpic'%3E%3C/script%3E"));
        }`
      }] }
    />
  </div>
)

DefaultHeadMeta.propTypes = {
  meta: React.PropTypes.arrayOf(React.PropTypes.object),
  scripts: React.PropTypes.arrayOf(React.PropTypes.object),
}

DefaultHeadMeta.contextTypes = {
  metadata: PropTypes.object.isRequired,
}

export default DefaultHeadMeta
