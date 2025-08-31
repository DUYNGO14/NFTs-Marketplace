import React from 'react'
import Style from './Button.module.css'

const Button = ({ icon, btnName, handleClick }) => {
  return (
    <div className={Style.box}>
      <button className={Style.btn} onClick={handleClick}>
        {icon && <span className={Style.icon}>{icon}</span>}
        {btnName}
      </button>
    </div>
  )
}

export default Button
