import { ThumbsUp, Trash } from 'phosphor-react'
import React from 'react'
import { Avatar } from '../Avatar'
import styles from './Comment.module.css'

export const Comment = ({ content, onDeleteComment }) => {

  const handleDeleteComment = () => {
    onDeleteComment(content)
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/60861927?v=4" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Edgar Silva</strong>
              <time title="11 de maio ás 18:13" dateTime="2022-05-11 08:13:00">Cerca de 2h atrás</time>
            </div>
            <button onClick={handleDeleteComment} title="Deletar comentario">
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}