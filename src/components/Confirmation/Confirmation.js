import React from 'react';
import { Link } from 'react-router-dom';
import Logout from '../Logout/Logout'

function Confirmation(){
    return(
        <div>

                        <div className='home'>
                            <Link to='/'><button className='homebutton'>home</button></Link>
                        </div>

            <Logout />
            <h1>Success</h1>
        </div>
    )
}

export default Confirmation