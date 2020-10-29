import React from 'react'
import { toast } from 'react-toastify'

import './button.scss'

function Button(props) {
  const handleClick = () => toast("testing...")

  return <button className='button' onClick={handleClick}>{props.children}</button>
}

export default Button
