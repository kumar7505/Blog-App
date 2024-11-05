import { useState } from 'react';
import Header from './components/header.jsx';
import Post from './components/post.jsx';
import {Routes, Route} from 'react-router-dom';
import Layout from './components/layout.jsx';
import IndexPages from './components/pages/indexpage.jsx';
import Loginpage from './components/pages/loginpage.jsx';
import Registerpage from './components/pages/registerpage.jsx'
import UserContextProvider from './components/usercontext.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={ <IndexPages /> }/>
          <Route path="/login" element={ <Loginpage /> } />
          <Route path="/register" element={ <Registerpage /> } />
        </Route>
      </Routes>
    </UserContextProvider>
  )
}

export default App
