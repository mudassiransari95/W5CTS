import React from 'react'
import Home from './Home'
import './App.css'
import AboutUs from './pages/AboutUs'
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Hero from './pages/MagentoWebsite';
import Opencart from './pages/Opencart';
import PhpLaravel from './pages/PhpLaravel';
import Shopify from './pages/Shopify';
import WordPress from './pages/WordPress';
import AndroidApplication from './MobileApplication/AndroidApplication';
import HybridApplication from './MobileApplication/HybridApplication';
import IOSApplication from './MobileApplication/IOSApplication';
import CustomSoftware from './pages/CustomSoftware';
import DigitalMarjetting from './pages/DigitalMarjetting';
import HrmCrmHrcm from './pages/HrmCrmHrcm';
import GraphicDesign from './pages/GraphicDesign';
import NFTDevelopment from './pages/NFTDevelopment';
import RPADevelopment from './pages/RPADevelopment';
import BlockchainDevelopment from './pages/BlockchainDevelopment';
import InternetOfThings from './pages/InternetOfThings';
import AIARVRDevelopment from './pages/AIARVRDevelopment';
import GameDevelopment from './pages/GameDevelopment.jsx';
const App = () => {
  return (
    <div>
      <BrowserRouter>
      {/* <Home/> */}

      <Routes>

      <Route path="/about" element={<AboutUs/>} />
      <Route path="/" element={<Home/>} />
      <Route path="/magento" element={<Hero/>} />
      <Route path="/opencart" element={<Opencart/>} />
      <Route path="/phpLaravel" element={<PhpLaravel/>} />
      <Route path="/shopify" element={<Shopify/>} />
      <Route path="/wordpress" element={<WordPress/>} />
      <Route path="/androidapplication" element={<AndroidApplication/>} />
      <Route path="/hybridapplication" element={<HybridApplication/>} />
      <Route path="/IOSApplication" element={<IOSApplication/>} />
      <Route path="/customsoftware" element={<CustomSoftware/>} />
      <Route path="/DigitalMarjetting" element={<DigitalMarjetting/>} />
      <Route path="/HrmCrmHrcm" element={<HrmCrmHrcm/>} />
      <Route path="/GraphicDesign" element={<GraphicDesign/>} />
      <Route path="/NFTDevelopment" element={<NFTDevelopment/>} />
      <Route path="/RPADevelopment" element={<RPADevelopment/>} />
      <Route path="/BlockchainDevelopment" element={<BlockchainDevelopment/>} />
      <Route path="/InternetOfThings" element={<InternetOfThings/>} />
      <Route path="/AIARVRDevelopment" element={<AIARVRDevelopment/>} />
      <Route path="/GameDevelopment" element={<GameDevelopment/>} />
      </Routes>
      
      </BrowserRouter>
    </div>
  )
}

export default App