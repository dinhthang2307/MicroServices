import './App.css';
import React, {useEffect} from 'react';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import RegisterPage from './pages/Register';
import NotFoundPage from './pages/NotFoundPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Products from './pages/Products';
import { connect } from 'react-redux';
import { Actions as authActions } from './redux/auth';
function App({requestUserLogin, user}) {

  const getUserLoginOnRefreshPage = (user) => {
    var action =  requestUserLogin(user)
  }

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const user = JSON.parse(loggedInUser);
      getUserLoginOnRefreshPage(user);
    }
  }, []);

  return (
    <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        {user?.email ?  <Route path="/product" element={<Products />} /> :   <Route path="*" element={<NotFoundPage />} /> }
       
        <Route path="/registration" element={<RegisterPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  </BrowserRouter>
  );
}

 const mapStateToProps = (state) => ({
  user: state.auth.user,
})
const mapDispatchToProps = (dispatch) => ({
  requestUserLogin: (user) => dispatch(authActions.requestGetUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
