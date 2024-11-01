import { useState } from 'react';
import Header from './components/header.jsx'
import Post from './components/post.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header></Header>
      <Post></Post>
    </div>
  )
}

export default App
