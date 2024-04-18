import { useState } from 'react'
import Navbar from './components/Navbar'
import MainView from './components/MainView.jsx'
import Footer from './components/Footer.jsx'

function App() {
  
  return(
    <div className='container'>
      <Navbar />
      <MainView />
      <Footer />
    </div>
    )

}

export default App
