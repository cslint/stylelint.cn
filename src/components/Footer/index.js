import React from "react"
import Helmet from "react-helmet"
import Svg from "react-svg-inline"

import github from './github.svg'
import twitter from './twitter.svg'

import styles from "./index.css"

const Footer = () => (
  <footer className={ styles.footer } role="contentinfo">
    <ul className={ styles.items }>
      <li className={ styles.item }>
        <a
          className={ styles.itemInner }
          href="https://github.com/stylelint/stylelint"
        >
          <Svg
            className={ styles.svg }
            svg={ github }
          />
        </a>
      </li>
      <li className={ styles.item }>
        <a
          className={ styles.itemInner }
          href="https://twitter.com/stylelint"
        >
          <Svg
            className={ styles.svg }
            svg={ twitter}
          />
        </a>
      </li>
      <li className={ styles.item }>
        <span id='cnzz_stat_icon_1261171879'></span>
      </li>
    </ul>
    <Helmet
      script={ [{
        type: "text/javascript",
        "innerHTML": `{
        var cnzz_protocol = (("https:" == document.location.protocol) ? " https://" : " http://");document.write(unescape("%3Cscript src='" + cnzz_protocol + "s4.cnzz.com/z_stat.php%3Fid%3D1261171879%26show%3Dpic'%3E%3C/script%3E"));
        }`
      }] }
    />
  </footer>
)

export default Footer
