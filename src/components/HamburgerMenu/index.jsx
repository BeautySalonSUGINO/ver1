import React from "react"
import { Link } from "gatsby"
import { slide as Menu } from "react-burger-menu"

import "@stylesComponent/_hamburgerMenu.scss"

import suginoLogo from "@images/logo.png"
import twitterIcon from "@images/twitter-icon.svg"
import instagramIcon from "@images/instagram-icon.svg"
import facebookIcon from "@images/facebook-icon.svg"

const HamburgerMenu = () => {
  return (
    <Menu right>
      <div id="c-hamburgerMenu--logo" className="u-mt__48px u-mb__48px">
        <img src={suginoLogo} alt="スギノ美容室ロゴ" />
      </div>
      <Link to="/" className="menu-item">
        TOP
      </Link>

      <Link to="/newslist" className="menu-item">
        NEWS
      </Link>

      <Link to="/bloglist" className="menu-item">
        BLOG
      </Link>

      <Link to="#menu" className="menu-item">
        MENU
      </Link>

      <Link to="/contact" className="menu-item">
        CONTACT
      </Link>

      <div id="c-hamburgerMenu--snsIconArea">
        <div id="c-hamburgerMenu--snsIcon">
          <a href="https://twitter.com/Salon_SUGINO">
            <img src={twitterIcon} alt="Twitterのアイコン" />
          </a>
        </div>
        <div id="c-hamburgerMenu--snsIcon" className="u-ml__16px">
          <a href="https://www.instagram.com/beautysalon_sugino/">
            <img src={instagramIcon} alt="Instagramのアイコン" />
          </a>
        </div>
        <div id="c-hamburgerMenu--snsIcon" className="u-ml__16px">
          <a href="https://www.facebook.com/%E3%82%B9%E3%82%AE%E3%83%8E%E7%BE%8E%E5%AE%B9%E5%AE%A4-1306838159405487/">
            <img src={facebookIcon} alt="facebookのアイコン" />
          </a>
        </div>
      </div>
    </Menu>
  )
}

export default HamburgerMenu
