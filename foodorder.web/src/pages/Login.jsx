import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { Actions as authActions, REQUEST_LOGIN_SUCCESS } from "../redux/auth"
import { connect } from "react-redux"
import { useNavigate } from 'react-router-dom';

const LoginPage = ({requestUserLogin, authError, user}) => {
  const navigate = useNavigate();

  const [data, setData] = useState({});
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(values => ({...values, [name]: value}))
  }
 // if the user is already authenticated, redirect them to the "/profile" page
 React.useEffect(() => {
  if (user?.email ) {
    navigate("/")
  }
}, [user, navigate])
  const notifySuccess = () =>{
    toast.success("Registration successful");
  } 

  const notifyError = (ex)=>{
    toast.error(ex);
  }
  const handleLogin = async (event)=>{
    event.preventDefault();
  
    var action = await requestUserLogin({username: data.username, password: data.password });
    if(action?.type == REQUEST_LOGIN_SUCCESS){
      notifySuccess();
    } else {
      var bug = authError;
      notifyError(bug)
    }
  }
  
  return (
    <div className='col-12 col-md-6 offset-md-3 pb-2'>
      <h1 className='col-12 col-md-6 offset-md-3 pb-2'>Login</h1>
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
        <button type="submit" className='btn btn-success col-12 col-md-6 offset-md-3 pb-2'>Login</button><br/>
      </form>
      <a href='/registration' className='col-12 col-md-6 offset-md-3 pb-2'>register</a>
      <ToastContainer />

    </div>
  )
}

const mapStateToProps = (state) => ({
  isLoading: state.auth.isLoading,
  authError: state.auth.error,
  user: state.auth.user
})
 
const mapDispatchToProps = (dispatch) => ({
  requestUserLogin: ({ username, password }) => dispatch(authActions.requestUserLogin({ username, password })),
})
 

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);