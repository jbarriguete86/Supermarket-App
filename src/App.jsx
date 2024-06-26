import React from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import List from './pages/List'
import MainLayout from "./components/MainLayout"

function App() {
 

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainLayout/>}>
        <Route index element={<List />}/>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
