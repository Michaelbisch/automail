import React, {Component} from 'react'
import { Link } from 'react-router-dom';

class Auth extends Component{
    render(){
        return(
            <div>
                <input placeholder="Email"></input>
                <input placeholder="Password"></input>
                <Link to='/'><button>Home</button></Link>
                <Link to='/'><button>Login</button></Link>
                <Link to='/createuser'><button>Create User</button></Link>
            </div>
        )
    }
}
export default Auth