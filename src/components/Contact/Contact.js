import React from 'react';
import { Link } from 'react-router-dom';
import Logout from '../Logout/Logout'

function Contact(){
    return(
        <div>
            <Logout />
            <Link to='/'><button>Home</button></Link>
            <div>
                <div>
                    <h2>Store Contact Information</h2>
                    <h5>946 South State</h5>
                    <h5>PROVO, UT</h5>
                    <h5>84606</h5>
                    <h5>automailfabrication@gmail.com</h5>
                    <h5><a href="tel:+1-801-462-5307">+1 (801) 462-5307</a></h5>
                </div>

                <div>
                    <h2>Hours of Oporation</h2>
                    <h5>Monday - Friady: 10:00 am - 6:00 pm</h5>
                    <h5>Saturday: Available upon appointment.</h5>
                </div>
            </div>
            
                    
                    
                    <div>
                    <button>
                    <a href={`mailto:wmichaelbischoff@gmail.com`}><h5>Contact</h5></a>
                    </button>
                    </div>
        </div>
    )
}

export default Contact