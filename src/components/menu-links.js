/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import React from "react"
import { Link } from "gatsby"
import onClickOutside from "react-onclickoutside"

import ExternalLink from "./external-link"

class MenuLinks extends React.Component {
  state = {
    submenuHover: false,
    submenuVisible: false,
  }

  setSubmenuHover = (isHovered) => {
    this.setState({ submenuHover: isHovered })
  }

  toggleSubmenuVisible = () => {
    this.setState((prevState) => ({
      submenuVisible: !prevState.submenuVisible,
    }))
  }

  handleClickOutside = (evt) => {
    this.setState({ submenuVisible: false })
  }

  render() {
    return (
      <ul>
        <li>
          <Link to="/">2022 Candidates &amp; Platform</Link>
        </li>
        <li>
          <ExternalLink href="https://docs.google.com/forms/d/e/1FAIpQLSf5sMP7VoDz1pTydV4y0br0xKaiT16ipe7yKx61iXaVANan7A/viewform">
            Endorse
          </ExternalLink>
        </li>
        <li>
          <ExternalLink href="https://breadandrosesdsa.org/">
            Bread &amp; Roses DSA
          </ExternalLink>
        </li>
      </ul>
    )
  }
}

export default onClickOutside(MenuLinks)
