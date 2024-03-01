import './App.css';
import HomePage from './pages/HomePage'
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';
import { BrowserRouter,  Route } from "react-router-dom";
import React from 'react';
import {useState, useEffect} from 'react';
import AuthProvider from './provider/authProvider';
import Routes from './routes';
import Navbar from './components/Navbar';


function App() {
  
  const [email, setEmail] = useState('')
  const [loggedIn, setLoggedIn] = useState(false)
  const [currentUser, setCurrentUser] = useState({})
  return (
    <div className="App">
      <Navbar currentUser= {currentUser}/>
      <AuthProvider>
        <Routes/>
      </AuthProvider>
    </div>
  );
}

export default App;
