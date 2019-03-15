import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import {connect} from 'react-redux';
import { updateUser } from "./../../ducks/reducer";

class CreateUser extends Component{
    constructor(props) {
        super(props) 
        this.state = {
            email: '',
            password: ''
        }
        this.register = this.register.bind(this)
    }
    handleChange(prop,val){
        this.setState({
            [prop]:val
        })
    }
    async register(){
        let user = {
            email: this.state.email,
            password: this.state.password
        }
        try {
            let res = await axios.post('/auth/register', user) 
            this.props.updateUser(res.data) 
            this.props.history.push('/')
            console.log('User Created')
        } catch(err){ 
            alert('email already created') 
        }
           
    }

    render(){
        
        return(
            <div>
                <input type='text' placeholder='Email' value={ this.state.email } onChange={ e => this.handleChange('email', e.target.value)}></input>
                <input type='password' placeholder='Password' value={ this.state.password } onChange={ e =>this.handleChange('password', e.target.value)}></input>
                        <div className='home'>
                            <Link to='/'><button className='homebutton'>home</button></Link>
                        </div>
                <button onClick={this.register}>Create User</button>
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        id: state.user_id
    }
}

const mapDispatchToProps = {
    updateUser
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateUser)