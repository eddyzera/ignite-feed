import React from 'react'
import styles from './Avatar.module.css'

export const Avatar = (props) => {
  return <img className={ props.hasBorder ? styles.avatarWithBorder :styles.avatar } src={props.src} />
}