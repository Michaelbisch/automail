import React, {Component} from 'react';
import { Link } from 'react-router-dom'

class Customize extends Component{
    render(){
        return(
            <div>
                <Link to='/'><button>Home</button></Link>
                <Link to='/checkout'><button>CheckOut</button></Link>
            </div>
        )
    }
}
export default Customize