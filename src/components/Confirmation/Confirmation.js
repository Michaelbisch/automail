import React from 'react';
import { Link } from 'react-router-dom'

function Confirmation(){
    return(
        <div>
            <Link to='/'><button>Home</button></Link>
            <h1>Success</h1>
        </div>
    )
}

export default Confirmation