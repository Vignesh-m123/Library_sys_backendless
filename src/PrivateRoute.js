import React from 'react';
import { Switch,Link, Route, BrowserRouter as Router, Redirect,useHistory } from 'react-router-dom';

const PrivateRoute = ({component,path})=>{
    const user =localStorage.getItem("token");
    return (user ?<Route exact path={path} component={component} /> 
    : <Redirect to='/login' /> 
    );
}
export default PrivateRoute;