import React from 'react'
import { format, formatDistanceToNow } from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'
import { Avatar } from '../Avatar'
import { Comment } from '../Comment'
import styles from './Post.module.css'

export const Post = ({ author, publishedAt, content }) => {

  const [comments, setComments] = React.useState([
    'Post muito legal'
  ])

  const [newCommentText, setNewCommentText] = React.useState('')

  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'ás' HH:mm'h'", {
    locale: ptBr,
  })

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBr,
    addSuffix: true
  })

  const handleCreateNewComment = (event) => {
    event.preventDefault()
    setComments([...comments, newCommentText])
    setNewCommentText('')
  }

  const handleNewCommentChange = (event) => {
    setNewCommentText(event.target.value)
  }

  const deleteComment = (comment) => {
    const commentWithoutDeleteOne = comments.filter(it => it !== comment)
    setComments([...newCommentState])
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar hasBorder={true} src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
      </header>

      <div className={styles.content}>
        {content.map(it => {
          if(it.type === 'paragraph') {
            return <p key={it.content}>{it.content}</p>
          } else if(it.type === 'link') {
            return <p key={it.content}><a href="">{it.content}</a></p>
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          name="comment"
          value={newCommentText}
          placeholder="Deixe um comentario"
          onChange={handleNewCommentChange}
        />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        { comments.map(comment => {
          return (
            <Comment key={comment} content={comment} onDeleteComment={deleteComment} />
          )
        }) }
      </div>
    </article>
  )
}