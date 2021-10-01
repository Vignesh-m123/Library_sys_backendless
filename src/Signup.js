import React, { useState, useEffect } from 'react';
import { useDispatch,useSelector} from 'react-redux';
//import {Saga} from './Redux/Saga/Saga.js';
import {Register} from './Redux/Saga/Saga.js';
import  './Signup.css'
import {register} from './Redux/Actions/Action'
import  {LOG_IN, REGISTER_REQUEST,REGIS_TER, REGISTER_FAIL, BOOK, BOOK_FLAG,LOG_OUT }  from './Redux/Actions/Action_types';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Login from './Login';
    

const Signup = () =>{
    const name = useSelector(state=>state.username);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch =  useDispatch();
    const error= false;
    ///const data = [username,password,error];  
    const bcount=0;
    const token ="token";
    const data={username,password,bcount,token,error};    
    const submithand = (e) =>{
       e.preventDefault();             
       dispatch({type:REGIS_TER, payload:data});
        //register(username,password,error);   <BrowserRouter> <Route exact path='/login' component={Login} />
         console.log("register func caled");
         alert("Submitted Successfully")
        // reset();
        setUsername("");
        setPassword("");
       
    };

return(
    
    
    <div className="whole form-group form container col-xl-5">
     
    <form onSubmit={submithand}>
    

    <legend className="text-center display-3">Registration</legend>
    <label className="display-6 text-danger ">
    Username
    </label>
    <input  type="text" value={username} className="form-control" onChange={e => setUsername(e.target.value)} 
    placeholder="Enter your Username"/>
    <br></br>

    <label className="display-6 text-info ">
    Password
    </label>
    <input  type="password" value={password} className="form-control" placeholder="Enter your password" 
    onChange={(e) => setPassword(e.target.value)}/>
    <br/> 
    <button type="submit"  className="btn btn-primary">Submit</button><br></br>
    <br/> 
    </form>
    <Link to='/login' className="h5 text-decoration-none" >>>>Login Page.....</Link>
    
    </div>);
}
export default Signup;