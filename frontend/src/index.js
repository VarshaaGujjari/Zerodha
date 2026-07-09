import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './landing_page/home/HomePage';
import Signup from './landing_page/signup/SignupForm';
import AboutPage from './landing_page/about/AboutPage';
import PricingPage from './landing_page/pricing/PricingPage';
import ProductsPage from './landing_page/products/ProductsPage';
import SupportPage from './landing_page/support/SupportPage';
import Notfound from './landing_page/Notfound';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';
import AuthPage from "./landing_page/signup/AuthPage";
// import Home from "./dashboard/components/Home";
// import './dashboard/index.css';
// import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Navbar />
    <Routes >
      <Route path="/" element={<HomePage />} />
      <Route path="/Signup" element={<AuthPage />} />
      {/* <Route path="/dashboard/*" element={<Home />} /> */}
      <Route path="/About" element={<AboutPage />} />
      <Route path="/Pricing" element={<PricingPage />} />
      <Route path="/Products" element={<ProductsPage />} />
      <Route path="/Support" element={<SupportPage />} />
      <Route path="*" element={<Notfound />} />
    </Routes>
    <Footer/>
  </BrowserRouter>
);



// const LandingLayout = () => (
//   <>
//     <Navbar />
//     <Outlet />
//     <Footer />
//   </>
// );

// root.render(
//   <BrowserRouter>
//     <Routes>
//       <Route element={<LandingLayout />}>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/Signup" element={<AuthPage />} />
//         <Route path="/About" element={<AboutPage />} />
//         <Route path="/Pricing" element={<PricingPage />} />
//         <Route path="/Products" element={<ProductsPage />} />
//         <Route path="/Support" element={<SupportPage />} />
//         <Route path="*" element={<Notfound />} />
//       </Route>
//       <Route path="/dashboard/*" element={<Home />} />
//     </Routes>
//   </BrowserRouter>
// );
 