import React from "react"

import suginoLogo from "@images/logo.png"

const Infomation = () => {
  return (
    <>
      <h2 className="c-h2 u-mb__32px">INFOMATION</h2>

      <div style={{ width: "200px" }} className="u-mb__32px">
        <img src={suginoLogo} alt="スギノ美容室のロゴ" />
      </div>

      <p className="u-mb__16px">&#12306;515-0034</p>
      <p className="u-mb__16px">三重県松阪市南町218-15</p>
      <p className="u-mb__16px">&#8481;:0598-21-7337 ※予約優先制</p>
      <p className="u-mb__32px">営業時間:AM9:00～PM6:00</p>
    </>
  )
}

export default Infomation
