import React from 'react';
import { Link } from 'react-router-dom';
import Logout from '../Logout/Logout';
// import { text3dParticles } from 'text-3d-particles';

// var opts = 
// { width: 400
// , height: 400
// , text: '★'
// , foreground: '#707070'
// , background: '#f6f6f6'
// , duration: 6000
// }
// var textGraph = text3dParticles(opts, function() {
//     console.log('Animation completed.')
//   })

function Dashboard(){

    return(
        <div>
        <Logout />
        <Link to='/reviews'><button>Reviews</button></Link>
        <Link to='/contact'><button>Contact</button></Link>
        <Link to='/customize'><button>Customize</button></Link>
        <Link to='/about'><button>About</button></Link>
       {/* {textGraph} */}
                    

        </div>
    )
}

export default Dashboard