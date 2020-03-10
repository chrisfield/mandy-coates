import React from "react"
import InstagramIcon from "./instagram.inline.svg"
import Envelope from "./envelope.inline.svg"
import footerStyles from "./footer.module.css"

export default props => (
  <footer>
    <div className={footerStyles.links}>
      <a className={footerStyles.link} href="mailto:mandybaskets61@gmail.com">
        mandybaskets61@gmail.com
      </a>
    </div>
  </footer>
)