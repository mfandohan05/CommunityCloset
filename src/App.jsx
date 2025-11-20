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
import CheckoutScreenComponent from './components/shop-components/CheckoutScreenComponent.jsx';
import SuccessfulCheckoutComponent from './components/shop-components/SuccessfulCheckoutComponent.jsx';

function App() {

  return (
    <div className='main-page-grid'>
      <NavbarComponent />
      <Routes>
        <Route path="/donate" element={<MainDonationComponent />} />
        <Route path="/donation-success" element={<SuccessfulDonationComponent />} />
        <Route path="/item-detail/:itemId" element={<ItemDetailComponent />} />
        <Route path="/CommunityCloset" element={<HomePageComponent />} />
        <Route path="/shop" element={<MainShopComponent />} />
        <Route path="/shopping-cart" element={<ShoppingCartComponent />} />
        <Route path="/checkout" element={<CheckoutScreenComponent />} />
        <Route path="/successful-checkout" element={<SuccessfulCheckoutComponent />}></Route>
      </Routes>
      <FooterComponent />
      
    </div>

  )
}

export default App
