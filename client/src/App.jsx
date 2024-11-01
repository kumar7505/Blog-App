import { useState } from 'react';
import Header from './components/header.jsx';
import Post from './components/post.jsx';
import {Routes, Route} from 'react-router-dom';
import Layout from './components/layout.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={ <Post /> }/>
        <Route path={'/login'} element={ <p>login page</p> } />
      </Route>
    </Routes>

  )
}

export default App
