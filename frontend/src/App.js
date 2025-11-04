import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Prices from './pages/Prices';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';

function App(){
  return (
    <div className='app'>
      <Header />
      <main className='container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/services' element={<Services />} />
          <Route path='/prices' element={<Prices />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/admin/login' element={<AdminLogin />} />
          <Route path='/admin/dashboard' element={<AdminDashboard />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
