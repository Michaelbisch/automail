import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logout from '../Logout/Logout';
import { connect } from 'react-redux';

const successBody = { background: 'radial-gradient(circle, rgba(255,255,255,1) 40%, rgba(160,160,160,1) 100%', minWidth: 360, width: '60%', minHeight: '35%', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'black', borderRadius: '60px', fontSize: '100%'}
const successTitle = { color: '#32CD32' }

class Confirmation extends Component{
    constructor(){
        super()
        this.state = {
            order_id: 0
        }
        this.updateState = this.updateState.bind(this)
    }
    componentDidMount(){
        this.updateState()
    }
    updateState(){
        this.setState({
            order_id: this.props.order_id
        })
    }

    render(){
       
    return(
        <div>

                        <div className='home'>
                            <Link to='/'><button className='homebutton'>home</button></Link>
                        </div>

            <Logout />
            <div style={successBody}>
            <h1 style={successTitle}>Success!</h1>
            <h2>Thank you for your purchase with Automail custom license plate covers!</h2>
            <h2>You should expect your order in 5 buisness days.</h2>
            <h2>Your order id is {this.state.order_id}</h2>
            <h2>You will need this id if there is an issue with your order.</h2>
            <h2>If you would like to leave us a review just insert this id at the top of the review page</h2>
            </div>
        </div>
    )
    }
}

const mapStateToProps = (state) => {
    return {
       order_id: state.order_id
    }
}

export default connect(mapStateToProps)(Confirmation)