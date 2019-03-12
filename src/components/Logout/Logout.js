import React, {Component} from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import {updateUser,clearUser} from './../../ducks/reducer';
import { Link } from 'react-router-dom'


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
        console.log(555555, this.props)
        
        if(this.props.email !== ''){
            return ( 
                     <div>
                        <button onClick={this.logout}>Logout</button>
                    </div> 
     )
    } else {
        return (
        <div>
        <Link to='/auth'><button>Login</button></Link>
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
