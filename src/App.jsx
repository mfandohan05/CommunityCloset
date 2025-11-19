import { useState } from 'react'
import NavbarComponent from './components/NavbarComponent.jsx';
import './App.css'
import FooterComponent from './components/FooterComponent.jsx';
import MainDonationComponent from './components/donation-components/MainDonationComponent.jsx';
import HomePageComponent from './components/HomePageComponent.jsx';
import SuccessfulDonationComponent from './components/donation-components/SuccessfulDonationComponent.jsx';
import { Routes, Route } from 'react-router-dom';
import MainShopComponent from './components/shop-components/MainShopComponent.jsx';
import ItemDetailComponent from './components/shop-components/ItemDetailComponent.jsx';
import ShoppingCartComponent from './components/shop-components/ShoppingCartComponent.jsx';

function App() {

  return (
    <div className='main-page-grid'>
      <NavbarComponent />
      <Routes>
        <Route path="/donate" element={<MainDonationComponent />} />
        <Route path="/donation-success" element={<SuccessfulDonationComponent />} />
        <Route path="/item-detail" element={<ItemDetailComponent />} />
        <Route path="/" element={<HomePageComponent />} />
        <Route path="/shop" element={<MainShopComponent />} />
        <Route path="/shopping-cart" element={<ShoppingCartComponent />} />
      </Routes>
      <FooterComponent />
      
    </div>

  )
}

export default App
