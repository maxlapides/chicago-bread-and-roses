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

  setSubmenuHover = isHovered => {
    this.setState({ submenuHover: isHovered })
  }

  toggleSubmenuVisible = () => {
    this.setState(prevState => ({ submenuVisible: !prevState.submenuVisible }))
  }

  handleClickOutside = evt => {
    this.setState({ submenuVisible: false })
  }

  render() {
    return (
      <ul>
        <li>
          <Link to="/">2021 Delegate Candidates &amp; Priorities</Link>
        </li>
        <li>
          <ExternalLink href="https://docs.google.com/document/d/1yKN-isoxZ9m8IofKC2uJrecD3T-Q7YyELzB6cuaiVME/edit">
            Points of Unity
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
