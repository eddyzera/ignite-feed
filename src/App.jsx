import { Header } from "./components/Header"
import styles from './App.module.css'
import './global.css'
import { Sidebar } from "./components/Sidebar"

function App() {
  return (
   <>
     <Header />
     <div className={styles.wrapper}>
        <Sidebar />
      <main>
        <div>
          <h1>Edgar Silva</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <div>
          <h1>Edgar Silva</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
      </main>
     </div>
   </>
  )
}

export default App
