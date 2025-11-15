import { useState } from 'react'
import NavbarComponent from './components/NavbarComponent.jsx';
import './App.css'
import FooterComponent from './components/FooterComponent.jsx';
import MainDonationComponent from './components/donation-components/MainDonationComponent.jsx';
import HomePageComponent from './components/HomePageComponent.jsx';
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div className='main-page-grid'>
      <NavbarComponent />
      <Routes>
        <Route path="/donate" element={<MainDonationComponent />} />
        <Route path="/" element={<HomePageComponent />} />
      </Routes>
      <FooterComponent />
      
    </div>

  )
}

export default App
