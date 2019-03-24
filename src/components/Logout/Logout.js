import React, {Component} from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import {updateUser,clearUser, modalOneTrue, modalFalse} from './../../ducks/reducer';
import './Logout.css';
import Modal from 'react-responsive-modal'
import Auth from '../Auth/Auth'

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
    openModal = () => {
        this.props.modalOneTrue()
    }
    async logout() {
        await axios.post('/auth/logout')
        this.props.modalFalse()
        this.props.clearUser()
        this.setState({
            user: '',
         })
    }
    onOpenFirstModal = () => {
        this.props.modalOneTrue()
      };
    
      onCloseFirstModal = () => {
        this.props.modalFalse()
      };
    render(){
        console.log(111,this.props.openFirstModal)
        console.log(2222, this.props.openSecondModal)
        if(this.props.email !== ''){
            return ( 
                     <div className='auth'>
                        <button onClick={this.logout} className='authbutton'>Logout</button>
                    </div> 
     )
    } else {
        const { openFirstModal } = this.props;
        return (
        <div className='auth'>
        <button className='authbutton' onClick={this.onOpenFirstModal}>Login</button>

        <Modal open={openFirstModal} onClose={this.onCloseFirstModal} center>
            <Auth />
        </Modal>

        </div>
        )
    }
    }
}

const mapStateToProps = (state) => {
    return {
        email: state.email,
        user_id: state.user_id,
        openFirstModal: state.openFirstModal,
        openSecondModal: state.openSecondModal
    }
}

export default connect(mapStateToProps, { updateUser, clearUser, modalOneTrue, modalFalse })(Logout)
