import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import CustomPhoto from '../CustomPhoto/CustomPhoto';
import Logout from '../Logout/Logout'
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';
import {connect} from 'react-redux';

const stripeDiv = {width: '20vw', height: '45vh', minHeight: 450, position: 'absolute', top: '26vh', right: '15vw'}
const stripeButton = {width: '20vw', position: 'absolute', left: '0%', bottom: '1%'}
const mustBe = { position: 'absolute', left: '37vw', top: '45vh'}

class CheckOut extends Component{
    constructor(props) {
        super(props)
        this.state = {
            amount: 3000
        }
    }

    onToken = (token) => {
        token.card = void 0
        axios.post('/api/payment', {token, amount: this.state.amount}).then(res => {
            console.log(12341234,res.data.billing_details.address)

            var {
                rtopinput,
                rbottominput,
                platecolor,
                rtextcolor,
                user_id
            } = this.props
            var { line1, city, state, postal_code, country } = res.data.billing_details.address
            var shipping = `${line1}, ${city}, ${state}, ${postal_code}, ${country}`
            

            axios.post('/api/placedorder',{rtopinput, rbottominput, platecolor, rtextcolor, shipping, user_id}).then(() => {
                this.props.history.push('/confirmation')

            })

        })
    }
    render(){
        console.log(4444444,this.props)
        if(this.props.user_id !== 0){
        return(
            <div>
                <div>
                    <Logout />
                        <div className='home'>
                            <Link to='/'><button className='homebutton'>home</button></Link>
                        </div>
                </div>
                <CustomPhoto />
                <div style={stripeDiv}>
                    <StripeCheckout 
                        name="Automail Industries."
                        description="Custom License Plate"
                        shippingAddress
                        billingAddress
                        zipCode
                        token = {this.onToken}
                        stripeKey={'pk_test_CmQCk8PskvWNIep7n07rRzKn'}
                        amount={this.state.amount}
                        >
                        <button style={stripeButton}>Pay with Card</button>
                    </StripeCheckout>
                </div>
                
                
            </div>
        )
    }
    else { return( <div style={mustBe}>
            <Logout />
            <div className='home'>
            <Link to='/'><button className='homebutton'>home</button></Link>
        
        </div><h1>Must be logged in to checkout</h1></div> )}
}
}
const mapStateToProps = (state) => {
    return {
        email: state.email,
        user_id: state.user_id,
        isReviewed: state.isReviewed,
        rplatecolor: state.rplatecolor,
        rtextcolor: state.rtextcolor,
        rtopinput: state.rtopinput,
        rbottominput: state.rbottominput
    }
}

export default connect(mapStateToProps)(CheckOut)