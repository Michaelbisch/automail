import React, {Component} from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import {updateUser,clearUser} from './../../ducks/reducer';
import { Link } from 'react-router-dom'
import './Logout.css';


class Logout extends Component{
    constructor(props) {
        super(props)
        this.state = {
            user: ''
        }
        this.logout = this.logout.bind(this)
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
    async logout() {
        await axios.post('/auth/logout')
        this.props.clearUser()
        this.setState({
            user: ''
        })
        alert(`Successfully logged out`)
    }
    
    render(){
        
        if(this.props.email !== ''){
            return ( 
                     <div className='auth'>
                        <button onClick={this.logout} className='authbutton'>Logout</button>
                    </div> 
     )
    } else {
        return (
        <div className='auth'>
        <Link to='/auth'><button className='authbutton'>Login</button></Link>
        </div>
        )
    }
    }
}

const mapStateToProps = (state) => {
    return {
        email: state.email,
        user_id: state.user_id
    }
}

export default connect(mapStateToProps, { updateUser, clearUser})(Logout)
