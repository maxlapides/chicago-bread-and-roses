import React from "react"
import classNames from "classnames"

import "./hero.scss"

const heroStyle = (imageName) =>
  imageName
    ? {
        backgroundImage: `url(/headers/${imageName}.png)`,
      }
    : null

const Hero = ({ title, color, imageName }) => (
  <div
    className={classNames("hero", `hero--${color}`)}
    style={heroStyle(imageName)}
  >
    <h1>{title}</h1>
  </div>
)

export default Hero
