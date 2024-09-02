import { useState } from 'react'
import Landing from './Components/Landing'
import TopBlogs from './Components/TopBlogs'


function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <Landing/>
      <TopBlogs/>
    </main>
  )
}

export default App
