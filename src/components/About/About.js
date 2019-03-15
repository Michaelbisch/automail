import React from 'react';
import { Link } from 'react-router-dom';
import Logout from '../Logout/Logout'


function About(){
    
    return(
        <div>
            <Logout />

                        <div className='home'>
                            <Link to='/'><button className='homebutton'>home</button></Link>
                        </div>

        </div>
    )
}

export default About