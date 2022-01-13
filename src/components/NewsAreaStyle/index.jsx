import React, { Children } from "react"
import { Link } from "gatsby"

// Styles
import "@stylesComponent/_newsContentsItem.scss"
import "@stylesComponent/_topic.scss"
import "@stylesProject/_newsArea.scss"
import "@stylesProject/_newsContents.scss"

import Scissors from "@images/Scissors.png"

const NewsAreaStyle = ({ children }) => {
  return (
    <section id="p-newsArea">
      <h2 className="c-h2 u-mb__16px">NEWS</h2>
      <span className="c-border u-mb__32px"></span>
      <div className="u-mb__32px">
        <div id="c-topic">
          <p id="c-topic--p1" className="u-ml__32px u-ptb__12px">
            TOPIC
          </p>
          <Link to={`/topic`}>
            <p className="u-ml__96px">
              新型コロナウイルスに関する感染対策について
            </p>
          </Link>
        </div>
      </div>
      <div id="p-newsContents">{children}</div>
      <span className="c-border u-pt__16px u-mb__16px"></span>
      <div className="c-scissorsButton u-mb__96px">
        <Link to={`/newslist/`}>
          <div className="c-scissorsButton--content">
            <div className="c-scissorsButton--icon">
              <img src={Scissors} alt="ハサミのアイコン" />
            </div>
            <p className="c-scissorsButton--p u-ml__16px u-pb__5px">
              一覧はこちら
            </p>
          </div>
        </Link>
      </div>
    </section>
  )
}

export default NewsAreaStyle
