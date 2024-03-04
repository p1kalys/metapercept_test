import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import ContentTop from './components/ContentTop'
import ContentBottom from './components/ContentBottom'

function App() {
    return (
      <>
      <Navbar />
      <ContentTop />
      <ContentBottom />
      </>
    )
}

export default App
