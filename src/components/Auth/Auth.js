import React, {Component} from 'react'
import axios from 'axios';
import {connect} from 'react-redux';
import { updateUser, modalFalse, modalTwoTrue } from "./../../ducks/reducer";
import CreateUser from '../CreateUser/CreateUser';
import Modal from 'react-responsive-modal';


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
            this.props.modalFalse()
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
    onOpenSecondModal = () => {
        this.props.modalTwoTrue()
    };
    
    onCloseSecondModal = () => {
        this.props.modalFalse()
    };
    render(){
        const { openSecondModal } = this.props;
        return(
            <div className='authbody'>
                <div>
                        <input style={{marginTop: 'unset'}} type='text' placeholder="Email" value={this.state.email} onChange={e=>this.handleChange('email',e.target.value)}></input>
                        <input style={{marginTop: 'unset'}} type='password' placeholder="Password" value={this.state.password} onChange={e=>this.handleChange('password',e.target.value)}></input>
                        <button style={{marginTop: 'unset', color: 'white'}} className='contactatags' onClick={this.login}>Login</button>
                        <button style={{marginTop: 'unset', position: 'relative', left: '10vw'}} onClick={this.onOpenSecondModal}>Create an Account</button>
                </div>

                <Modal open={openSecondModal} onClose={this.onCloseSecondModal} center>
                    <CreateUser />
                </Modal>
                
            </div>
        )
    }
}
const mapStateToProps = (State) => {
    return {
        id: State.id,
        openFirstModal: State.openFirstModal,
        openSecondModal: State.openSecondModal
    }
}

export default connect(mapStateToProps, {updateUser, modalFalse, modalTwoTrue })(Auth)