import React from 'react';
import { Link } from 'react-router-dom';
import Logout from '../Logout/Logout';
import Map from 'pigeon-maps';
import Marker from 'pigeon-marker';
import Overlay from 'pigeon-overlay';
import './contact.css';


function mapsSelector() {
    if((navigator.platform.indexOf("iPhone") !== -1) || (navigator.platform.indexOf("iPad") !== -1) || (navigator.platform.indexOf("iPod") !== -1)) {
      window.open("maps://maps.google.com/maps?daddr=40.221298, -111.640918&amp;ll="); }
  else {
      window.open("http://maps.google.com/maps?q=946+S+State+St,+Provo,+UT+84606");
  }
  }

function Contact(props){
    return(
        
        <div className='contactpage'>
            <Logout />

                        <div className='home'>
                            <Link to='/'><button className='homebutton'>home</button></Link>
                        </div>


            <h1>Contact Information</h1>
            <div className='contactinfo'>
                <div style={{ width: '50vw', height: '25vh', marginRight: '4vw'}}>
                    <h2 style={{fontSize: '1.5vmax' }}>Store Contact Information</h2>
                    <div onClick={mapsSelector} className='contactatags'>
                    <h5 style={{fontSize: '1.1vmax'}}>946 South State PROVO, UT 84606</h5>
                    </div>
                    <h5 style={{fontSize: '1.2vmax'}}><a href={`mailto:automailfabrication@gmail.com`} className='contactatags'>automailfabrication@gmail.com</a></h5>
                    <h5 style={{fontSize: '1.3vmax'}}><a href="tel:+1-801-462-5307" className='contactatags'>+1 (801) 462-5307</a></h5>
                </div>

                <div style={{ width: '50vw', height: '25vh', marginLeft: '4vw'}}>
                    <h2 style={{fontSize: '1.5vmax'}}>Hours of Operation</h2>
                    <h5 style={{fontSize: '1.2vmax'}}>Monday - Friady: 10:00 am - 6:00 pm</h5>
                    <h5 style={{fontSize: '1.2vmax'}}>Saturday: Available upon appointment.</h5>
                    <h5 style={{fontSize: '1.4vmax'}}>Sunday: Closed</h5>
                </div>
            </div>
                            <div style={{height: '36vh', width: '50vw', position: 'absolute', left: '25.5vw', bottom: '18vh'}}>
                            <Map center={[40.221286, -111.640885]} zoom={15}>
                            <Marker anchor={[40.221286, -111.640885]} payload={1} onClick={({ event, anchor, payload }) => {}} />
            
                                <Overlay anchor={[50.879, 4.6997]} offset={[120, 79]}>
                            <img src='pigeon.jpg' width={240} height={158} alt='' />
                                </Overlay>
                            </Map>
                            </div>    
                <div>
                </div>
        </div>
    )
}

export default Contact