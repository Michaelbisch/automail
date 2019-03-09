import React from 'react';
import { Link } from 'react-router-dom';
import Logout from '../Logout/Logout'

function Confirmation(){
    return(
        <div>
            <Link to='/'><button>Home</button></Link>
            <Logout />
            <h1>Success</h1>
        </div>
    )
}

export default Confirmation