import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useAuth } from '../provider/authProvider';
import { useNavigate } from 'react-router-dom';
const LoginPage = (props) => {
  const navigate = useNavigate();

  const { setToken } = useAuth();
  const [data, setData] = useState({});
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(values => ({...values, [name]: value}))
  }
  const handleLogin = (event)=>{
    event.preventDefault();
    var header = {
      'Content-type': 'application/json; charset=UTF-8',
      'mode': 'no-cors',
      'Accept': 'application/json',
      'Origin': 'http://localhost:3000'
    };
    window.alert(JSON.stringify(data));
    axios({
      method:'post',
      url:'https://localhost:7002/api/auth/login',
      data: JSON.stringify(data),
      headers: header,
    }).then(res=>{
      if(res != null && res.data.isSuccess){
        var token = res.data.result.token;
        setToken(token)
        localStorage.setItem('jwt-token', data.token);
        navigate('/profile')
      }
    })
    .catch(ex=>{
      var bug = ex.response.data.message || ex.message;
    })
  }
  return (
    <div className='col-12 col-md-6 offset-md-3 pb-2'>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <div className='col-12 col-md-6 offset-md-3 pb-2'>
          <input 
          className="form-control" 
          type="text" 
          name="username" 
          placeholder="Username"
          onChange={handleChange} 
          value={data.username}/><br/>
        </div>
        
        <div className='col-12 col-md-6 offset-md-3 pb-2'>
          <input 
          className="form-control" 
          type="password" 
          name="password" 
          placeholder="Password"
          onChange={handleChange} 
          value={data.password}/><br/>
        </div>
        <button type="submit" className='btn btn-success'>Login</button><br/>
      </form>
      <a href='register'>register</a>
    </div>
  )
}

export default LoginPage;