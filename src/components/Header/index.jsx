import React from 'react'
import IgniteLogo from '../assets/logo.svg'
import styles from './Header.module.css'

export const Header = () => {
  return (
    <header className={styles.header}>
      <img src={IgniteLogo} alt="logo do ignite feed" />
    </header>
  )
}