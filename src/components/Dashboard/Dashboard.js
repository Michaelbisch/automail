import React from 'react';
import { Link } from 'react-router-dom'
import Logout from '../Logout/Logout'




function Dashboard(props){
    // console.log(props)

    //
    return(
        <div>
        <Logout />
        <Link to='/reviews'><button>Reviews</button></Link>
        <Link to='/contact'><button>Contact</button></Link>
        <Link to='/customize'><button>Customize</button></Link>
        <Link to='/about'><button>About</button></Link>
        {/* {routes} */}
        </div>
    )
}

export default Dashboard