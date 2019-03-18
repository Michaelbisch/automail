import React from 'react';
import { Link } from 'react-router-dom';
import Logout from '../Logout/Logout';



function Dashboard(){

    return(
        <div>
        <Logout />
        <Link to='/reviews'><button>Reviews</button></Link>
        <Link to='/contact'><button>Contact</button></Link>
        <Link to='/customize'><button>Customize</button></Link>
          

        </div>
        
    )
}

export default Dashboard