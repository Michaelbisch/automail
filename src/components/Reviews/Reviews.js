import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Logout from '../Logout/Logout'

class Reviews extends Component{
    constructor(props) {
        super(props)
        this.state = {
            user: ''
        }
    }
    componentWillMount(){
        this.checkUser();
    }
    
    checkUser = async () => {
        try {
            let res = await axios.get('/auth/checkuser')
            
            
            this.setState({
                user: res.data,
            })
        } catch(err) {
            console.log(err)
        }
    }
    render(){
        if(this.state.user !== '') {
            return <div>
                <Link to='/post'><button>Make a review</button></Link>
                <Link to='/'><button>Home</button></Link>
                <Logout />
                </div>
        } 
        return(
            <div>
                <Link to='/'><button>Home</button></Link>
                <h3>Login to make a review
                    <Logout />
                </h3>

                
            </div>
        )
    }
}
export default Reviews