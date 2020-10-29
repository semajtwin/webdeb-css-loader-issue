import React from 'react'
import classNames from 'classnames'

import './shape.scss'

function Shape(props) {
  return (
    <div
      className={classNames('shape', {
        square: props.type === 'square',
        circle: props.type === 'circle'
      })}
    >
      {props.type}
    </div>
  )
}

export default Shape