import { Route, BrowserRouter,Switch} from 'react-router-dom';
import './App.css';
import Login from './Login.js';
import Signup  from './Signup';
import Book  from './Book';
import PrivateRoute from './PrivateRoute';
function App() {
  return (
  
    <BrowserRouter> 
    <Switch>
    <Route exact path='/'><Signup/></Route>  
    <Route exact path='/login' > <Login/></Route>  
    <PrivateRoute exact path="/book"  component={Book} />
    </Switch>
    </BrowserRouter>
    );
}

export default App;
