import React,{useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LOGIN } from './Redux/Actions/Action_types';
import axios from 'axios';
import Book from './Book.js';
import { Switch,Link, Route, BrowserRouter as Router, Redirect,useHistory } from 'react-router-dom';
const Login = () =>{
    const [username, setUsername]=useState("");
    const [password, setPassword]=useState("");
    const [login, setLogin] = useState(false);
    // useEffect(
    //     { 
    //     fetch.get('http://localhost:8000/user').then(response=>response.data)
    //     });
    const history = useHistory();
    const state = useSelector((state) => state);
    const dispatch = useDispatch();
    const his = false;
         useEffect(()=>{
             if(login){
                 alert("Login successfull");
            history.push('/book');

            }
            //<Redirect to='/book' />;
            
         },[login]);
    
    const submith = (e) =>{
         e.preventDefault(); 
         const url=`http://localhost:8000/user?username=${username}&&password=${password}`;
         try{
         axios.get(url)
         .then((response)=>{
            console.log(response)
            if(response.data.length>0){    
            console.log("done")          
            dispatch({type:LOGIN, payload:{username, password}});
            // <Redirect to='/book'/>
            setLogin(true);
            const tk =response.data[0].token; 
            // console.log(response.data[0].token)
            localStorage.setItem("token",JSON.stringify(tk));
            // if(login){
            //     history.push('/book');
            //     // return <Redirect to='/book' />;
            // }

         }}).catch(error=>{throw error})
        //  dispatch({type:LOGIN, payload:{username,password}});
        }
        catch(error){console.log(error)};
        // console.log(localStorage.getItem);
        // <Link to='/book'>book</Link>    
        
        setUsername("");
        setPassword("");
        
}
return(
    <div className="whole">
    <div className="form-group form container col-xl-5">
    <form onSubmit={submith}>

    <legend className="text-center display-3">Login Panel</legend>
    <label className="display-7 text-primary center-align">
    Username
    </label>
    
    <input  type="text" value={username} className="form-control" onChange={e => setUsername(e.target.value)} 
    placeholder="Enter the Username"/>
    <br/>
    <label className="text-success display-7">
    Password
    </label>
    
    <input  type="password" value={password} className="form-control" placeholder="Enter the password" 
    onChange={(e) => setPassword(e.target.value)}/>
    <br/> 
    <button type="submit"  className="btn btn-primary ">Submit</button>
    <br/>
    <Route exact path="/book" component={Book} />
    </form>    
    </div>
   </div>
    )
}

export default Login;