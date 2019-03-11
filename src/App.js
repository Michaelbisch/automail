import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard'
import { Switch, Route } from 'react-router-dom';
import Admin from './components/Admin/Admin';
import Auth from './components/Auth/Auth';
import Reviews from './components/Reviews/Reviews';
import ReviewMaker from './components/ReviewMaker/ReviewMaker';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Customize from './components/Customize/Customize';
import CheckOut from './components/CheckOut/CheckOut';
import Confirmation from './components/Confirmation/Confirmation';
import CreateUser from './components/CreateUser/CreateUser';



function App(){

  return (
      <div className="App">
       <Switch>
        <Route exact path ='/' component={Dashboard}  />
        <Route path='/admin'  component={Admin} />
        <Route path='/auth'  component={Auth} />
        <Route path='/reviews'  component={Reviews} />
        <Route path='/post'  component={ReviewMaker} />
        <Route path='/about'  component={About} />
        <Route path='/contact'  component={Contact} />
        <Route path='/customize'  component={Customize} />
        <Route path='/checkout'  component={CheckOut} />
        <Route path='/confirmation'  component={Confirmation} />
        <Route path ='/createuser' component={CreateUser} />
        {/* <Route path  component={Logout}  /> */}
      </Switch>
      </div>
    );
  }
  

export default App
