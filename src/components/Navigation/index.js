import React from "react"
import { Link } from "phenomic"

import styles from "./index.css"

const Navigation = () => (
  <nav className={ styles.navigation } id="navigation" role="navigation">
    <ul className={ styles.items }>
      <li className={ styles.item }>
        <Link
          className={ styles.itemInner }
          to="/user-guide/"
        >
          { "用户指南" }
        </Link>
        <ul className={ styles.secondaryItems }>
          <li className={ styles.itemSecondary }>
            <Link
              className={ styles.itemInnerSecondary }
              to="/user-guide/rules/"
            >
              { "规则" }
            </Link>
          </li>
          <li className={ styles.itemSecondary }>
            <Link
              className={ styles.itemInnerSecondary }
              to="/user-guide/plugins/"
            >
              { "插件" }
            </Link>
          </li>
          <li className={ styles.itemSecondary }>
            <Link
              className={ styles.itemInnerSecondary }
              to="/user-guide/processors/"
            >
              { "Processors" }
            </Link>
          </li>
        </ul>
      </li>
      <li className={ styles.item }>
        <Link
          className={ styles.itemInner }
          to="/developer-guide/"
        >
          { "开发指南" }
        </Link>
      </li>
      <li className={ styles.item }>
        <Link
          className={ styles.itemInner }
          to="/demo/"
        >
          { "Demo" }
        </Link>
      </li>
    </ul>
  </nav>
)

export default Navigation
