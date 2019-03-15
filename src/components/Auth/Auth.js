import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import {connect} from 'react-redux';
import { updateUser } from "./../../ducks/reducer";


class Auth extends Component{
    constructor(props){
        super(props)
        this.state = {
            id: 0,
            email: '',
            password: ''
        }
        this.login = this.login.bind(this)
    }
    

    async login() {
        let user = {
            id: this.state.id,
            email: this.state.email,
            password: this.state.password,
        }
        try {
            let res = await axios.post('/auth/login', user)
            this.props.updateUser(res.data)
            this.props.history.push('/')
        } catch(err) {
            console.log(err)
            alert('incorrect username or password')
        }
    }
    handleChange(prop,val){
        this.setState({
            [prop]:val
        })
    }
    render(){
        return(
            <div>
                    <div className='home'>
                    <Link to='/'><button className='homebutton'>home</button></Link>
                    </div>
                <input type='text' placeholder="Email" value={this.state.email} onChange={e=>this.handleChange('email',e.target.value)}></input>
                <input type='password' placeholder="Password" value={this.state.password} onChange={e=>this.handleChange('password',e.target.value)}></input>
                <button onClick={this.login}>Login</button>
                <Link to='/createuser'>Create an Account</Link>
            </div>
        )
    }
}
const mapStateToProps = (State) => {
    return {
        id: State.id,
    }
}

export default connect(mapStateToProps, {updateUser})(Auth)