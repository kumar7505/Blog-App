import { useState } from 'react';
import Header from './components/header.jsx';
import Post from './components/post.jsx';
import {Routes, Route} from 'react-router-dom';
import Layout from './components/layout.jsx';
import IndexPages from './components/pages/indexpage.jsx';
import Loginpage from './components/pages/loginpage.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={ <IndexPages /> }/>
        <Route path="/login" element={ <Loginpage /> } />
      </Route>
    </Routes>

  )
}

export default App
