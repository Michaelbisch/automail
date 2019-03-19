import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard'
import { Switch, Route } from 'react-router-dom';
import Admin from './components/Admin/Admin';
import Auth from './components/Auth/Auth';
import Reviews from './components/Reviews/Reviews';
import ReviewMaker from './components/ReviewMaker/ReviewMaker';
import Contact from './components/Contact/Contact';
import Customize from './components/Customize/Customize';
import CheckOut from './components/CheckOut/CheckOut';
import Confirmation from './components/Confirmation/Confirmation';
import CreateUser from './components/CreateUser/CreateUser';
import { SimpleShareButtons } from 'react-simple-share';



function App(){

  return (
      <div className="App">
       {/* <img  src='https://s3-us-west-2.amazonaws.com/automail-custom-covers/trianglify+(1).png' alt='smile' width="100%" height="100%" /> */}

       <Switch>
        <Route exact path ='/' component={Dashboard}  />
        <Route path='/admin'  component={Admin} />
        <Route path='/auth'  component={Auth} />
        <Route path='/reviews'  component={Reviews} />
        <Route path='/post'  component={ReviewMaker} />
        <Route path='/contact'  component={Contact} />
        <Route path='/customize'  component={Customize} />
        <Route path='/checkout'  component={CheckOut} />
        <Route path='/confirmation'  component={Confirmation} />
        <Route path ='/createuser' component={CreateUser} />
      </Switch>

            <div className='shareicons'>
            <h2 style={{fontSize: '1.6vmax' }}>Share us!</h2>
            <SimpleShareButtons url="https://www.automailindustries.com/" size="40px" />
            </div>
            
      </div>
    );
  }
  

export default App
