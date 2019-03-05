import React from 'react';
import { Link } from 'react-router-dom'

function Dashboard(){
    return(
        <div>
        <Link to='/auth'><button>Login</button></Link>
        <Link to='/reviews'><button>Reviews</button></Link>
        <Link to='/contact'><button>Contact</button></Link>
        <Link to='/customize'><button>Customize</button></Link>
        <Link to='/about'><button>About</button></Link>
        </div>
    )
}

export default Dashboard