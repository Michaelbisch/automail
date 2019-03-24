import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard'
import { Switch, Route } from 'react-router-dom';
import Admin from './components/Admin/Admin';
import Reviews from './components/Reviews/Reviews';
import ReviewMaker from './components/ReviewMaker/ReviewMaker';
import Contact from './components/Contact/Contact';
import Customize from './components/Customize/Customize';
import CheckOut from './components/CheckOut/CheckOut';
import Confirmation from './components/Confirmation/Confirmation';
import { SimpleShareButtons } from 'react-simple-share';



function App(){

  return (
      <div className="App">

       <Switch>
        <Route exact path ='/' component={Dashboard}  />
        <Route path='/admin'  component={Admin} />
        <Route path='/reviews'  component={Reviews} />
        <Route path='/post'  component={ReviewMaker} />
        <Route path='/contact'  component={Contact} />
        <Route path='/customize'  component={Customize} />
        <Route path='/checkout'  component={CheckOut} />
        <Route path='/confirmation'  component={Confirmation} />
      </Switch>

            <div className='shareicons'>
            <h2 style={{fontSize: '1.6vmax' }}>Share us!</h2>
            <SimpleShareButtons url={"automailcovers.com"} size="40px" />
            </div>
            
      </div>
    );
  }
  

export default App
