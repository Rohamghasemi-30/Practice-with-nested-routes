import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Education from './pages/Education/Education'
import BlogPost from './pages/BlogPost/BlogPost'


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/education' element={<Education />}>
          <Route path=':categoryblog' element={<BlogPost />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App