import React from 'react';
import styles from './Button.module.scss';

const Button = ({ children, className, color, ...rest }: { children?: any, className?: string, color?: string }) => {
  let buttonClassName = styles.button;

  if (className) {
    buttonClassName = `${buttonClassName} ${className}`
  }

  return (
    <button className={buttonClassName} data-color={color} {...rest}>
      {children}
    </button>
  )
}

export default Button;