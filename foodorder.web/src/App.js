import './App.css';
import React from 'react';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import RegisterPage from './pages/Register';
import NotFoundPage from './pages/NotFoundPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Products from './pages/Products';
function App() {

  return (
    <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<div>User Profile</div>} />
        <Route path="/product" element={<Products />} />
        <Route path="/registration" element={<RegisterPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  </BrowserRouter>
  );
}

export default App;
