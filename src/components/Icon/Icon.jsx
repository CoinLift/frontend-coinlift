import React from "react"
import Icons from "../../assets/svg/sprite.svg"
export const Icon = ({ id, height, width }) => {
    return (
      <svg width={width} height={height}>
        <use href={Icons + `#${id}`} />
      </svg>
    )
   }