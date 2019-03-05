import React, {Component} from 'react'
import { Link } from 'react-router-dom'

class CheckOut extends Component{
    render(){
        return(
            <div>
                <Link to='/'><button>Home</button></Link>
                <Link to='/confirmation'><button>confirmation</button></Link>
            </div>
        )
    }
}
export default CheckOut