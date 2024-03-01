import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Select from "react-select";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const RegisterPage = (props) => {
    var roleList =  [{value: 'admin', label:'admin'},
     {value: 'customer', label:'customer'}];
     const [data, setData] = useState({});
    const [role, setRole] = useState("admin");
    
     const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setData(values => ({...values, [name]: value}))
    }

    const handleChangeRole = (event) => {
      setRole(values => (event.target.value));
    }
    const notifySuccess = () =>{
      toast.success("Registration successful");
    } 

    const notifyError = (ex)=>{
      toast.error(ex);
    }
    
     function handleRegister(event){
      event.preventDefault();
      data.ID = "string";
      data.role = role;
      var header = {
        'Content-type': 'application/json; charset=UTF-8',
        'mode': 'no-cors',
        'Accept': 'application/json',
        'Origin': 'http://localhost:3000'
      };


      axios({
        method:'post',
        url:'https://localhost:7002/api/auth/register',
        data: JSON.stringify(
          data
        ),
        headers: header,
      }).then(res=>{
        if(res!=null && res.data.isSuccess){
          notifySuccess()
        }
      })
      .catch(ex=>{
        var bug = ex.response.data.message|| ex.message;
        notifyError(bug)
      })
     }

    return (
      <div>
      <form onSubmit = {handleRegister}>
        <div className="container border p-4">
        <div className="row text-center">
            <h1>Register</h1>
        </div>
        <div className="row text-center">
            <div class="text-danger">
            </div>
        </div>
        <div className="col-12 col-md-6 offset-md-3 pb-2">
            <input 
            name="email" 
            className="form-control" 
            value={data.email||""}
            onChange={handleChange} 
            placeholder="Email..." />
        </div>
        <div className="col-12 col-md-6 offset-md-3 pb-2">
            <input 
            name="name" 
            class="form-control" 
            placeholder="Name..."
            value={data.name||""}
            onChange={handleChange}  />
        </div>
        <div className="col-12 col-md-6 offset-md-3 pb-2">
            <input
             name="phoneNumber" 
             class="form-control" 
             placeholder="PhoneNumber..." 
             value={data.phoneNumber||""}
             onChange={handleChange} />
        </div>
        <div className="col-12 col-md-6 offset-md-3 pb-2">
            <input 
            name="password" 
            class="form-control" 
            placeholder="Password..."
            value={data.password||""}
             onChange={handleChange} 
            />
        </div>
        <div className="col-12 col-md-6 offset-md-3 pb-2">
            <select 
              className="form-control"
              value={role}
              onChange={handleChangeRole} 
              name = "role"
            >
              {roleList.map((rol)=><option>{rol.value}</option>)}
              </select>
        </div>
        <div className="col-12 col-md-6 offset-md-3 pb-2">
            <button type="submit" class="form-control btn btn-success">Register</button>
        </div>
        <a href="/login">Login</a>
        </div>

      </form>
      <ToastContainer />

      </div>
    )
}

export default RegisterPage;