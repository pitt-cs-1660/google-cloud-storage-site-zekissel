import { useState } from 'react'
import './App.css'
import Nav from './Nav'
import About from './About'
import Work from './Work'
import Project from './Project'

function App() {

  const [curPage, setPage] = useState(0)

  return (
    <>
      <Nav setPage={setPage} />

      { curPage === 0 && <About /> }
      { curPage === 1 && <Work /> }
      { curPage === 2 && <Project /> }
    </>
  )
}

export default App