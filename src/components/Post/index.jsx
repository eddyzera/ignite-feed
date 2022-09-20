import React from 'react'
import { Comment } from '../Comment'
import styles from './Post.module.css'

export const Post = () => {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img src="https://avatars.githubusercontent.com/u/60861927?v=4" />
          <div className={styles.authorInfo}>
            <strong>Edgar Silva</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <time title="11 de maio ás 18:13" dateTime="2022-05-11 08:13:00">Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>

        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

        <p>
        👉 {' '}<a  href="#">jane.design/doctorcare</a>
        </p>

        <p>
          <a href="#">#novoprojet</a>{' '}
          <a href="#"> #nlw</a>{' '}
          <a href="#">#rocketseat</a>{' '}
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea 
          placeholder="Deixe um comentario"
        />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        <Comment />
      </div>
    </article>
  )
}