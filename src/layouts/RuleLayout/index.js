import React, { PropTypes } from "react"
import Helmet from "react-helmet"
import warning from "warning"
import { BodyContainer, joinUri } from "phenomic"

import Loading from "../../components/Loading"

import Svg from "react-svg-inline"
import wrench from "./wrench.svg"

import styles from "./index.css"

const RuleLayout = (
  {
    isLoading,
    __filename,
    __url,
    head,
    body,
    header,
    footer,
    children,
  },
  {
    metadata: { pkg },
  }
) => {

  warning(
    typeof head.title === "string",
    `Your page '${ __filename }' needs a title`
  )

  const metaTitle = head.metaTitle ? head.metaTitle : head.title

  const meta = [
    { property: "og:type", content: "article" },
    { property: "og:title", content: metaTitle },
    {
      property: "og:url",
      content: joinUri(process.env.PHENOMIC_USER_URL, __url),
    },
    { property: "og:description", content: head.description },
    { name: "twitter:card", content: "summary" },
    { name: "twitter:title", content: metaTitle },
    { name: "twitter:creator", content: `@${ pkg.twitter }` },
    { name: "twitter:description", content: head.description },
    { name: "description", content: head.description },
  ]

  return (
    <div className={ styles.page }>
      <Helmet
        title={ metaTitle }
        meta={ meta }
      />
      { header }
      <Svg
        className={ styles.wrench }
        svg={ wrench }
      />
      <style>{ `
         .wrench-inline {
            display: inline-block;
            width: 20px;
            height: 20px;
            stroke-width: 0;
            stroke: currentColor;
            fill: #f29900;
            vertical-align: middle;
         }
         .wrench {
            position: absolute;
            top: -13px;
            left: -46px;
          }
      `}</style>
      <div className={ styles.body }>
        {
          isLoading
          ? <Loading />
          : <BodyContainer>{ body.replace(/\(fix\)/g,'<svg class="wrench-inline"><use xlink:href="#icon-wrench"></use></svg>').replace(/\(fixable\)/g,'<svg class="wrench-inline wrench"><use xlink:href="#icon-wrench"></use></svg>') }</BodyContainer>
        }
      </div>
      { children }
      { footer }
    </div>
  )
}

RuleLayout.propTypes = {
  children: PropTypes.node,
  isLoading: PropTypes.bool,
  __filename: PropTypes.string,
  __url: PropTypes.string,
  head: PropTypes.object.isRequired,
  body: PropTypes.string,
  header: PropTypes.element,
  footer: PropTypes.element,
}

RuleLayout.contextTypes = {
  metadata: PropTypes.object.isRequired,
}

export default RuleLayout
