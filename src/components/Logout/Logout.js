import React, {Component} from 'react';
// import { Link } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import {updateUser,clearUser} from './../../ducks/reducer';


class Logout extends Component{
    constructor(props) {
        super(props)
        this.state = {
            // email: this.props.email,
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
              user: res.data
            })
          } catch(err) {
            console.log(err)
          }
        }
    logout = async () => {
        await axios.post('/auth/logout')
        this.props.clearUser()
        this.setState({
            user: ''
        })
        alert(`Successfully logged out`)
    }
    render(){
        console.log(this.state)
        console.log(this.props)
            if(this.state.user === 'Aok' || this.props.email !== ''){
                return ( 
                     <div>
                        <button onClick={this.logout}>Logout</button>
                    </div> 
     )
    }
    return null
}
}

const mapStateToProps = (state) => {
    return {
        email: state.email
    }
}

export default connect(mapStateToProps, { updateUser, clearUser})(Logout)
