'use client'

import { CustomBottomProps } from "@/types"
import Image from "next/image"

const CustomBottom = ({title, continerStyles, handleClick}: CustomBottomProps) => {
  return (
    <button
      disabled={false}
      type={"button"}
      className={`custom-btn ${continerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1`}>
        {title}
      </span>
    </button>    
  )
}

export default CustomBottom