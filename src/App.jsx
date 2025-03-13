import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Contact from './Component/Contact'

function App() {
  return (
   <Routes>
   
   <Route path='' element = {<Contact/>}/>
   
   </Routes>
  )
}

export default App