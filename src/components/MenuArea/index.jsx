import React from "react"

import "@stylesComponent/_menuContent.scss"
import "@stylesProject/_menuArea.scss"
import BaseMenuText from "../BaseMenuText"
import BaseMenuCard from "../BaseMenuCard"

import cutIcon from "@images/cut-icon.svg"
import colorIcon from "@images/color-icon.svg"
import whiteflower from "@images/white-flower.png"

const MenuArea = () => {
  return (
    <section id="p-menuArea" className="u-pt__64px">
      <div id="p-menuArea--wrap">
        <h2 id="menu" className="c-h2 u-mb__16px">
          MENU
        </h2>
        <span className="c-border u-mb__32px"></span>

        <div className="c-menuContent">
          <BaseMenuCard
            menuIcon={cutIcon}
            menuIconAlt="カットのアイコン"
            menuHead="カット"
          >
            <BaseMenuText menu="大人" price="3,850円～" />
            <BaseMenuText menu="子供" price="2,200円～" />
            <BaseMenuText menu="中学生、高校生" price="2,750円～" />
            <BaseMenuText menu="大学生" price="3,300円～" />
          </BaseMenuCard>
          <BaseMenuCard
            menuIcon={colorIcon}
            menuIconAlt="カラーのアイコン"
            menuHead="カラー"
          >
            <BaseMenuText menu="白髪染め" price="4,950円～" />
            <BaseMenuText menu="おしゃれ染め" price="6,050円～" />
            <BaseMenuText menu="オーガニックハーブ" price="5,830円～" />
          </BaseMenuCard>
        </div>

        <div className="c-menuContent u-mb__16px">
          <div className="c-menuContent--subMenu u-mrl__32px">
            <BaseMenuText menu="パーマ" price="7,700円～" />
            <BaseMenuText menu="矯正" price="16,500円～" />
            <BaseMenuText menu="眉カット" price="1,100円～" />
          </div>
          <div className="c-menuContent--subMenu u-mrl__32px">
            <BaseMenuText menu="ストレート" price="8,800円～" />
            <BaseMenuText menu="トリートメント" price="2,200円～" />
            <BaseMenuText menu="シャンプーブロー" price="2,200円～" />
          </div>
        </div>

        <span className="c-border u-mb__32px"></span>

        <div id="p-menuArea--flower" className="u-mb__32px">
          <img src={whiteflower} alt="白い花の画像" />
        </div>
      </div>
      <span className="gradilent__3"></span>
    </section>
  )
}

export default MenuArea
