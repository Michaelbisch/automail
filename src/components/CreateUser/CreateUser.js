import React, {Component} from 'react'
import { Link } from 'react-router-dom';
class CreateUser extends Component{
    render(){
        return(
            <div>
                <Link to='/'><button>Home</button></Link>
                <Link to='/'><button>Create User</button></Link>
            </div>

        )
    }
}
export default CreateUser