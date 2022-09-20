import React from 'react'
import { PencilLine } from 'phosphor-react'
import styles from './Sidebar.module.css'
import { Avatar } from '../Avatar'

export const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1604964432806-254d07c11f32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=40" 
        alt="cover sidebar"
      />

      <div className={styles.profile}>
        <Avatar hasBorder={true} src="https://avatars.githubusercontent.com/u/60861927?v=4" />
        <strong>Edgar Silva</strong>
        <span>Web Developer</span>
      </div>
      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar o seu perfil
        </a>
      </footer>
    </aside>
  )
}