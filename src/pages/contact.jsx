import React from "react"

import "@stylesProject/_contactArea.scss"

import BaseLayout from "@components/BaseLayout"
import HamburgerMenu from "@components/HamburgerMenu"

import Seo from "@containers/Seo"

const Contact = ({ location }) => {
  return (
    <>
      <HamburgerMenu />

      <div id="back-brown">
        <BaseLayout headerText="CONTACT">
          <Seo pagetitle="CONTACT" pagepath={location.pathname} />

          <section id="p-contactArea">
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              <input type="hidden" name="form-name" value="contact" />
              <input type="hidden" name="bot-field" />

              <div>
                <div className="u-mb__32px">
                  <label>
                    <p className="u-mb__8px">お名前</p>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="お名前"
                      maxLength={30}
                      minLength={2}
                      required
                      autoComplete="name"
                    />
                  </label>
                </div>
                <div className="u-mb__32px">
                  <label>
                    <p className="u-mb__8px">メールアドレス</p>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="メールアドレス"
                      pattern="^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"
                      required
                      autoComplete="email"
                    />
                  </label>
                </div>
                <div className="u-mb__32px">
                  <label>
                    <p className="u-mb__8px">お問い合わせ内容</p>
                    <textarea
                      id="contact"
                      name="content"
                      rows={20}
                      required
                    ></textarea>
                  </label>
                </div>
              </div>

              <div id="p-contactArea--submit" className="u-mb__96px">
                <button type="submit">送信</button>
              </div>
            </form>
          </section>
        </BaseLayout>
      </div>
    </>
  )
}

export default Contact
