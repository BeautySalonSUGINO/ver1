import React from "react"

import "@stylesProject/_conceptArea.scss"
import { StaticImage } from "gatsby-plugin-image"

const ConceptArea = () => {
  return (
    <section id="p-conceptArea">
      <div id="p-conceptArea--content">
        <h2 className="c-h2 u-mb__32px">CONCEPT</h2>

        <p className="u-fs__3rem  u-mb__32px">
          「Forest Bathing」
          <span className="u-fs__2rem">(森林浴)</span>
        </p>
        <p className="u-mb__32px">
          BeautySalon
          SUGINOに来たことで、​森林浴をしているようにリラックスしていただき、
          <br />
          「全ての人を気持ち良くさせたい。」その一心で、
          <br />
          傷んだ髪、疲れた心に癒しを与えたいという思いを込めています。
        </p>

        <div id="p-conceptArea--tree">
          <StaticImage src="../../assets/images/tree.png" />
        </div>
      </div>
      <span className="gradilent__1"></span>

      <div id="p-conceptArea--forest">
        <StaticImage
          layout="fullWidth"
          src="../../assets/images/forest.jpg"
          style={{ height: "100%" }}
        />
      </div>

      <span className="gradilent__2"></span>
    </section>
  )
}

export default ConceptArea
