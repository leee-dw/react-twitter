import React from 'react'
import { Link } from 'react-router-dom'
import cn from 'classnames'

import './Button.sass'

const Button = ({children, outline, className, active, to, ...rest}) => {
  return React.createElement(to ? Link : 'button', {
    to, className: cn('Button', className, {outline, active }),
    children,
    ...rest
  })
}

export default Button