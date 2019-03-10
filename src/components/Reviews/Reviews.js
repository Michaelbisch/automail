import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Logout from '../Logout/Logout';
import { connect } from 'react-redux';

class Reviews extends Component{
    constructor(props) {
        super(props)
        this.state = {
            user: ''
        }
    }
    componentDidMount(){
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
        console.log(this.props)
        if(this.props.email !== '') {
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
const mapStateToProps = (state) => {
    return {
        email: state.email
    }
}

export default connect(mapStateToProps)(Reviews)