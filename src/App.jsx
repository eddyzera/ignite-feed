import { Header } from "./components/Header"
import styles from './App.module.css'
import { Sidebar } from "./components/Sidebar"
import { Post } from "./components/Post"
import './global.css'

function App() {
  return (
   <>
     <Header />
     <div className={styles.wrapper}>
        <Sidebar />
      <main>
        <Post />
        <Post />
        <Post />
      </main>
     </div>
   </>
  )
}

export default App
