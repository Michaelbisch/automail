import React, {Component} from 'react'
import { Link } from 'react-router-dom'

class ReviewMaker extends Component{
    render(){
        return(
            <div>
                <Link to='/'><button>Home</button></Link>
                <Link to='/auth'><button>Login</button></Link>
                <Link to='/reviews'><button>submit</button></Link>
             </div>
        )
    }
}
export default ReviewMaker